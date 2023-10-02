import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

export const CheckoutInput = (props) => {
  return (
    <div className="flex flex-col  px-4 py-2">
      <label className="text-[.8rem] font-bold"> {props.label} </label>
      <input
        {...props}
        className={
          "!border-none outline-none rounded-md px-2 h-[2rem] " +
          props.className
        }
      />
    </div>
  );
};

export default function CheckoutAddress({ onContinue,onBack }) {
  return (
    <div className="h-auto">
      <div className="w-full mx-auto max-w-[700px] h-full scrollbar-thin scrollbar-thumb-[black] scrollbar-track-[white]  overflow-auto">
        <CheckoutInput label="Address title" />
        <CheckoutInput label="Full name" />
        <CheckoutInput label="Phone number" type="tel" />
        <CheckoutInput label="Zip code" />
        <div className="flex flex-col px-4 py-2">
          <label className="text-[.8rem] font-bold"> Address </label>
          <textarea
            rows={5}
            className="w-full md:w-1/2 resize-none p-2 outline-none"
          />
        </div>

        <div className="w-full flex justify-end">
          <button
            onClick={()=>{
                onBack()
            }}
          className="border shadow-xl transition-all hover:shadow-md border-black rounded px-4 py-1">
            <ArrowLeftIcon className="h-[1.5rem]" />
          </button>

          <button
            onClick={() => {
              onContinue();
            }}
            className="border shadow-xl ml-auto transition-all hover:shadow-md  px-6 py-2 rounded-md border-black"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
