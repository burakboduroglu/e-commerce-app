import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function CheckoutPayment({ onContinue, onBack }) {
  const [cc, setCC] = useState({
    number: "",
    holderName: "",
    expDate: "",
    cvv: "",
  });

  const handler = (e) => {
    setCC({
      ...cc,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col w-full gap-3 max-w-[700px] mx-auto">
      <div className="flex flex-col gap-2">
        <label className="text-[.8rem] font-bold"> Card Number </label>
        <ReactInputMask
          mask="9999-9999-9999-9999"
          name="number"
          onChange={handler}
          value={cc.number}
          className="px-2 py-2 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[.8rem] font-bold"> Holder Name </label>
        <input
          name="holderName"
          onChange={handler}
          value={cc.holderName}
          className="!border-none outline-none rounded-md px-2 h-[2rem]"
        />
      </div>
      <div className="flex w-full gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[.8rem] font-bold"> Expiry Date </label>
          <ReactInputMask
            mask="99/99"
            name="expDate"
            onChange={handler}
            value={cc.expDate}
            className="!border-none text-black outline-none rounded-md px-2 h-[2rem]"
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-[.8rem] font-bold"> CVV </label>
          <ReactInputMask
            mask="999"
            name="cvv"
            onChange={handler}
            value={cc.cvv}
            className="!border-none text-black outline-none rounded-md px-2 h-[2rem]"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            onBack();
          }}
          className="border shadow-xl transition-all hover:shadow-md border-black rounded px-4 py-1"
        >
          <ArrowLeftIcon className="h-[1.5rem]" />
        </button>

        <button
          onClick={() => {
            onContinue();
          }}
          className="border shadow-xl ml-auto transition-all hover:shadow-md  px-6 py-2 rounded-md border-black"
        >
          Pay
        </button>
      </div>
    </div>
  );
}
