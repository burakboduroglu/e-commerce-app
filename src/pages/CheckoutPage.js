import React, { useState } from "react";
import { NavbarWithMegaMenu } from "../components/Header";
import CheckoutCart from "../components/checkout/CheckoutCart";
import CheckoutAddress from "../components/checkout/CheckoutAddress";
import CheckoutPayment from "../components/checkout/CheckoutPayment";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function CheckoutPage() {
  //TODO Create step logic and use checkout components

  const [step, setStep] = useState(1);

  return (
    <div className="container m-auto mt-3 tile col-span-3 md:col-span-5 lg:col-span-8">
      <div>
        <NavbarWithMegaMenu />
      </div>
      <div className="w-full mt-20 h-40">
        {step == 1 && (
          <CheckoutCart
            onContinue={() => {
              setStep(2);
            }}
          />
        )}
        {step == 2 && (
          <CheckoutAddress
            onContinue={() => {
              setStep(3);
            }}
            onBack={() => {
              setStep(1);
            }}
          />
        )}
        {step == 3 && (
          <CheckoutPayment
            onContinue={() => {
              setStep(4);
            }}
            onBack={() => {
              setStep(2);
            }}
          />
        )}
        {step == 4 && (
          <div className="w-full text-green-500 h-full text-center gap-4 flex flex-col">
            <CheckBadgeIcon />
            <h1 className="text-black text-3xl font-bold">  Your Payment success </h1> 
          </div>
        )}
      </div>
    </div>
  );
}
