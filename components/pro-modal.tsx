"use client";

import axios from "axios";
import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { toast } from "react-hot-toast";

import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { tools } from "@/constants";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
  
      // First Step
      const apiKey = "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RRd09UZzBMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkudFdOWV9tcXMyaVh3Yk9pOUZHeGFiQkRmaGZlelk4bXktVlgtMEFqQjFGcElSQTVXWjlUcUN2Ql9ncEZsdmtjNmdPT2NoWUpQei1VbTJ4aVhPVEp0SVE=";
      const integrationID = 4353401;
  
      let { data: { token } } = await axios.post('https://accept.paymob.com/api/auth/tokens', { api_key: apiKey });
  
      // Second Step
      let { data: { id } } = await axios.post('https://accept.paymob.com/api/ecommerce/orders', {
        auth_token: token,
        delivery_needed: "false",
        amount_cents: "100",
        currency: "EGP",
        items: [],
      });
  
      // Third Step
      let { data: { token: paymentToken } } = await axios.post('https://accept.paymob.com/api/acceptance/payment_keys', {
        auth_token: token,
        amount_cents: "100",
        expiration: 3600,
        order_id: id,
        billing_data: {
          apartment: "803",
          email: "claudette09@exa.com",
          floor: "42",
          first_name: "Clifford",
          street: "Ethan Land",
          building: "8028",
          phone_number: "+86(8)9135210487",
          shipping_method: "PKG",
          postal_code: "01898",
          city: "Jaskolskiburgh",
          country: "CR",
          last_name: "Nicolas",
          state: "Utah"
        },
        currency: "EGP",
        integration_id: integrationID
      });
  
      // Navigate to payment page
      let iframeURL = `https://accept.paymob.com/api/acceptance/iframes/802999?payment_token=${paymentToken}`;
      window.location.href = iframeURL;
  
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl">
              Upgrade to Genius
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card key={tool.href} className="p-3 border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">
                    {tool.label}
                  </div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button disabled={loading} onClick={onSubscribe} size="lg" variant="premium" className="w-full">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};