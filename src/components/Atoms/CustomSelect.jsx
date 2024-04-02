import { Typography } from "@material-tailwind/react";
import { Field } from "formik";
import React from "react";
import Select from "react-select";

const CustomSelect = ({
  label,
  name,
  required = false,
  containerClass,
  options,
  placeholder,
  setFieldValue,
  errors,
}) => {
  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      display: "flex",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      display: "flex",
    }),
    control: (provided) => ({
      // class attribute : class=" css-i32vvf-control"
      ...provided,
      focus: "black",
      background: "transparent",
      display: "flex",
      flexWrap: "nowrap",
      borderRadius: "0px",
      borderColor: "bg-gray-900",
      padding: "0.3rem",
      display: "flex",
      justifyContent: "start",
      // width: '7em'
    }),
    menu: (provided) => ({
      // 'menu' is from the div class too.
      ...provided,
      display: "flex",
      background: "white",
    }),
  };
  return (
    <div className={containerClass || "w-72 my-2 "}>
      <Typography
        variant="small"
        color="gray"
        className="my-2 flex items-center gap-1 font-normal"
      >
        {label} {required && <span className="text-red">*</span>}
      </Typography>
      <Select
        name={name}
        // component={Select}
        placeholder={placeholder}
        options={options}
        styles={customStyles}
        onChange={(value) => {
          setFieldValue(name, value);
        }}
        // className="rounded-none !border !border-gray-300 bg-white text-gray-900 p-3"
      />
      {errors?.[name] ? (
        <p className="text-red text-[12px] mt-2 text-start">{errors?.[name]}</p>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default CustomSelect;
