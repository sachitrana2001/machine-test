import React, { useState } from "react";
const InputField = ({
  className,
  labelName,
  name,
  value,
  onChange,
  placeholder,
  onBlur,
  bottomlabel,
  isRequired,
  rightText,
  key,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenCloseArrowHandler = () => setIsOpen(!isOpen);
  const handleInputChange = (e) => {
    onChange(e);
  };

  // console.log(" input-values-->>", value);
  return (
    <>
      <div className="troo-input-field" key={key}>
        <label className="troo-label c-black" htmlFor={type}>
          {labelName} {isRequired && <span style={{ color: "red" }}>*</span>}
        </label>
        <input
          className={`troo-input-all type-data `}
          id={name}
          name={name}
          onBlur={onBlur}
          type={isShowPassword ? "text" : type}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
        />

        {rightText ? <div className="rightText">{rightText}</div> : null}
      </div>
      {bottomlabel && <div className="bottom-lable">{bottomlabel}</div>}
    </>
  );
};

export default InputField;
