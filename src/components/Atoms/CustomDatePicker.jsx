import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../assets/calendar.svg";
const CustomDatePicker = ({
  label,
  //   value,
  name,
  placeholder,
  required = false,
  containerClass,
  setFieldValue,
  values,
  errors,
}) => {
  return (
    <div className="my-2 w-72">
      <Typography
        variant="small"
        color="gray"
        className="my-2 flex items-center gap-1 font-normal"
      >
        {label} {required && <span className="text-red">*</span>}
      </Typography>
      <DatePicker
        dateFormat="dd/MM/YY"
        showIcon
        placeholderText="DD/MM/YYYY"
        name={name}
        selected={values?.[name]}
        onChange={(date) => {
          setFieldValue(name, date);
        }}
        icon={
          <img
            src={Calendar}
            className="mt-1 h-6  w-5 object-contain right-2"
          />
        }
        wrapperClassName="flex"
        className="!border w-72 !border-gray-300 bg-white h-12 rounded-none text-base py-[2.4rem]  placeholder:text-gray-500 placeholder:opacity-100 "
        // onChange={(date) => setStartDate(date)}
      />
      {errors?.[name] ? (
        <p className="text-red text-[12px] mt-2 text-start">{errors?.[name]}</p>
      ) : (
        <p> </p>
      )}
    </div>
  );
};
export default CustomDatePicker;
