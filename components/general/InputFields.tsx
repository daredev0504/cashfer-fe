import { FieldProps } from "formik";
import { ErrorMessage, useField } from "formik";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputFields = ({ label, ...props }: any) => {
  //const[field, meta] = useField(props)
  //console.log(field, meta);

  return (
    <div className="flex-col ">
      <div className="mb-2">
        {" "}
        <label className="text-gray-500 text-xs" htmlFor="">
          {label}
        </label>
      </div>

      <input
        {...props}
        className={`w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-cashfer-purple h-9 dark:focus-within:text-white `}
      />
    </div>
  );
};

export default InputFields;
