"use client";

import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Zap } from "lucide-react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";

export const SubscriptionButton = ({
  isPro = false
}: {
  isPro: boolean;
}) => {
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const onClick = async () => {
    try {
      setLoading(true);

      const apiKey = "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1RRd09UZzBMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkudFdOWV9tcXMyaVh3Yk9pOUZHeGFiQkRmaGZlelk4bXktVlgtMEFqQjFGcElSQTVXWjlUcUN2Ql9ncEZsdmtjNmdPT2NoWUpQei1VbTJ4aVhPVEp0SVE=";
      const integrationID = 4353401;

      const { data: { token } } = await axios.post('https://accept.paymob.com/api/auth/tokens', { api_key: apiKey });

      const { data: { id } } = await axios.post('https://accept.paymob.com/api/ecommerce/orders', {
        auth_token: token,
        delivery_needed: "false",
        amount_cents: "100",
        currency: "EGP",
        items: [],
      });

      const { data: { token: paymentToken } } = await axios.post('https://accept.paymob.com/api/acceptance/payment_keys', {
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

      if (isMounted.current) {
        window.location.href = `https://accept.paymob.com/api/acceptance/iframes/802998?payment_token=${paymentToken}`;
      }

    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  return (
    <Button variant={isPro ? "default" : "premium"} disabled={loading} onClick={onClick} >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};
