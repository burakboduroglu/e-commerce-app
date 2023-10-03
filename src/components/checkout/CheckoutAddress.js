import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

export const AlertInputError = ({ error }) => {
  return (
    <span className="text-[0.8rem] rounded-md ml-2 px-2 w-fit bg-red-200  text-white">
      {" "}
      {error}{" "}
    </span>
  );
};

export const CheckoutInput = (props) => {
  return (
    <div className="flex flex-col  px-4 py-2">
      <label className="text-[.8rem] font-bold">
        {" "}
        {props.label} {props?.error && <AlertInputError error={props.error} />}{" "}
      </label>
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

const validationScheme = Yup.object({
  title: Yup.string().required("Address title is required"),
  fullName: Yup.string().required("Full name is required"),
  phone: Yup.string().required("Phone is required"),
  zip: Yup.string().required("zip is required").min(3, "Minimum 3 characters"),
  address: Yup.string().required("Address is required"),
});

const initialValues = {
  title: "",
  fullName: "",
  phone: "",
  zip: "",
  address: "",
};

export default function CheckoutAddress({ onContinue, onBack }) {
  return (
    <div className="h-auto">
      <Formik validationSchema={validationScheme} initialValues={initialValues}>
        {({ errors, handleChange, values, isValid, dirty }) => (
          <form className="w-full mx-auto max-w-[700px] h-full scrollbar-thin scrollbar-thumb-[black] scrollbar-track-[white]  overflow-auto">
            <CheckoutInput
              value={values.title}
              error={errors?.title}
              onChange={handleChange}
              name="title"
              label="Address title"
            />
            <CheckoutInput
              error={errors?.fullName}
              value={values.fullName}
              onChange={handleChange}
              name="fullName"
              label="Full name"
            />
            <CheckoutInput
              error={errors?.phone}
              value={values.phone}
              onChange={handleChange}
              name="phone"
              label="Phone number"
              type="tel"
            />
            <CheckoutInput
              error={errors?.zip}
              value={values.zip}
              onChange={handleChange}
              name="zip"
              label="Zip code"
            />
            <div className="flex flex-col px-4 py-2">
              <label className="text-[.8rem] font-bold">
                {" "}
                Address{" "}
                {errors?.address && <AlertInputError error={errors.address} />}
              </label>
              <textarea
                value={values.address}
                onChange={handleChange}
                name="address"
                rows={5}
                className="w-full md:w-1/2 resize-none p-2 outline-none"
              />
            </div>

            <div className="w-full flex justify-end">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onBack();
                }}
                className="border shadow-xl transition-all hover:shadow-md border-black rounded px-4 py-1"
              >
                <ArrowLeftIcon className="h-[1.5rem]" />
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  onContinue();
                }}
                disabled={!isValid || !dirty}
                className="border disabled:cursor-not-allowed disabled:opacity-20 shadow-xl ml-auto transition-all hover:shadow-md  px-6 py-2 rounded-md border-black"
              >
                Continue
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
