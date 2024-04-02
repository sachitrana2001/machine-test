import { Input, Typography } from "@material-tailwind/react";
import { Field } from "formik";
import React from "react";

const CustomInput = ({
  label,
  name,
  type,
  placeholder,
  required = false,
  containerClass,
  errors,
}) => {
  return (
    <div className={`${containerClass} w-72 mt-2 flex flex-col justify-start`}>
      <Typography
        variant="small"
        color="gray"
        className="my-2 flex items-center gap-1 font-normal"
      >
        {label} {required && <span className="text-red">*</span>}
      </Typography>
      <Field
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        className="!border !border-gray-300 bg-white text-gray-900 rounded-none p-3 placeholder:text-gray-500 placeholder:opacity-100 "
      />
      {errors?.[name] ? (
        <p className="text-red text-[12px] mt-2 text-start">{errors?.[name]}</p>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default CustomInput;
