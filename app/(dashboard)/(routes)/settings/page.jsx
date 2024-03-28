import React from "react";

const SettingsPage = async () => {
  return ( 
    <div className="container mx-auto py-8 flex flex-col items-center">
      <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="text-3xl mb-4" style={{ fontWeight: 300 }}>About Us</h1>
        <div className="max-w-md">
          <p className="text-base leading-relaxed mb-4" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            Genius is one of the best AI solutions that provides all AI generations in one website. We offer our customers the best selection of Image Generation, Audio Generation, Video Generation, Chatbot, and Code Generation connected with an extremely low price.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            We are a startup company that provides a lot of AI services online
          </p>
        </div>
      </div>
      <div className="container mx-auto py-8 flex flex-col items-center">
        <h1 className="text-3xl mb-4" style={{ fontWeight: 300 }}>Terms Of Service</h1>
        <div className="max-w-md">
          <p className="text-base leading-relaxed" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            If you wanted to get more AI generations after the left down bar is telling you to subscribe you should pay to get more AI generations, If you subscribed for 3.99$ you will get 16 AI generations,The subscriber will get an email in about 24 hours, telling him/her that describes the number of this free generations and telling him he is allowed to use the generations that he paid for
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            If you decide to cancel the monthly subscription, no more than 14 hours must have passed.If you exceed 14 hours, we will not be able to cancel the subscription
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            If you want to pay more for to get more AI generations you can tell us by the chat button on the down right corner,And you will receive a response within 24 hours
          </p>
        </div>
      </div>
      <div className="container mx-auto py-8 flex flex-col items-center">
        <h1 className="text-3xl mb-4" style={{ fontWeight: 300 }}>Privacy Policy</h1>
        <div className="max-w-md">
          <p className="text-base leading-relaxed" style={{ color: '#a84871', marginTop: '10px', marginLeft: '10px' }}>
            Section 1 - Security
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.
          </p>
        </div>
        <div className="max-w-md">
          <p className="text-base leading-relaxed" style={{ color: '#a84871', marginTop: '10px', marginLeft: '10px' }}>
            Section 2 - Age of Consent
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
          By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
          </p>
        </div>
        <div className="max-w-md">
          <p className="text-base leading-relaxed" style={{ color: '#a84871', marginTop: '10px', marginLeft: '10px' }}>
            Section 3 - Changes to this Privacy Policy
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
          </p>
        </div>
      </div>
      <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className="text-3xl mb-4" style={{ fontWeight: 300 }}>Refund Policy</h1>
        <div className="max-w-md">
          <p className="text-base leading-relaxed mb-4" style={{ color: '#1b1417', marginTop: '10px', marginLeft: '10px' }}>
            You can cancel the susbscription in 14 hours from the susbscription date
          </p>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
