import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Formik } from "formik";
import * as Yup from "yup";
import { AlertInputError } from "./CheckoutAddress";

const initialValues = {
  number: "",
  holderName: "",
  expDate: "",
  cvv: "",
};

const validationSchema = Yup.object({
  number: Yup.string()
    .required("Card number is required")
    .min(19, "Valid card number is a required"),
  holderName: Yup.string().required("Card holder name is required"),
  expDate: Yup.string()
    .required("Expiry date is required")
    .min(5, "Valid expiry date is required"),
  cvv: Yup.string()
    .required("CVV is required")
    .min(3, "CVV should be minimum 3 character"),
});

export default function CheckoutPayment({ onContinue, onBack }) {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ errors, handleChange, values, isValid, dirty }) => (
        <form className="flex flex-col w-full gap-3 max-w-[700px] mx-auto">
          <div className="flex flex-col gap-2">
            <label className="text-[.8rem] font-bold">
              {" "}
              Card Number{" "}
              {errors?.number && <AlertInputError error={errors.number} />}{" "}
            </label>
            <ReactInputMask
              mask="9999-9999-9999-9999"
              name="number"
              onChange={handleChange}
              value={values.number}
              className="px-2 py-2 outline-none"
            />
            {errors?.number && <AlertInputError error={errors.number} />}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[.8rem] font-bold">
              Holder Name
              {errors?.holderName && (
                <AlertInputError error={errors.holderName} />
              )}
            </label>
            <input
              name="holderName"
              onChange={handleChange}
              value={values.holderName}
              className="!border-none outline-none rounded-md px-2 h-[2rem]"
            />
          </div>
          <div className="flex w-full gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-[.8rem] font-bold">
                Expiry Date
                {errors?.expDate && <AlertInputError error={errors.expDate} />}
              </label>
              <ReactInputMask
                mask="99/99"
                name="expDate"
                onChange={handleChange}
                value={values.expDate}
                className="!border-none text-black outline-none rounded-md px-2 h-[2rem]"
              />
            </div>
            <div className="flex flex-col gap-2 w-full ">
              <label className="text-[.8rem] font-bold">
                CVV
                {errors?.cvv && <AlertInputError error={errors.cvv} />}
              </label>
              <ReactInputMask
                mask="999"
                name="cvv"
                onChange={handleChange}
                value={values.cvv}
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
              disabled={!isValid || !dirty}
              className="border disabled:opacity-20 shadow-xl ml-auto transition-all hover:shadow-md  px-6 py-2 rounded-md border-black"
            >
              Pay
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}