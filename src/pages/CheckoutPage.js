import React, { useState } from 'react'
import { NavbarWithMegaMenu } from '../components/Header'
import CheckoutCart from '../components/checkout/CheckoutCart'
import CheckoutAddress from '../components/checkout/CheckoutAddress'
import CheckoutPayment from '../components/checkout/CheckoutPayment'


export default function CheckoutPage() {
    //TODO Create step logic and use checkout components

    const [step,setStep]=useState(1);
  return (
    <div className="container m-auto mt-3 tile col-span-3 md:col-span-5 lg:col-span-8">
    <div>
        <NavbarWithMegaMenu />
    </div>
    <div className="w-full h-40 border-4">
        {step==1 && <CheckoutCart/>}
        {step==2 && <CheckoutAddress/>}
        {step==3 && <CheckoutPayment/>}

    </div>
    </div>
  )
}
