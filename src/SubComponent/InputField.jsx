import React, { useState } from "react";
import "./InputField.css";
import { password, seatIcon } from "../assets/Icons";
const InputField = ({
  labelName,
  name,
  type,
  value,
  onChange,
  placeholder,
  onBlur,
  isDropDown,
  bottomlabel,
  isRequired,
  rightText,
  readOnly,
  key,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onOpenCloseArrowHandler = () => setIsOpen(!isOpen);
  const handleInputChange = (e) => {
    onChange(e);
  };
  const handlePasswordChange = () => {
    setIsShowPassword(!isShowPassword);
  };
  // console.log(" input-values-->>", value);
  return !isDropDown ? (
    <>
      <div className="troo-input-field" key={key}>
        <label className="troo-label c-black" htmlFor={type}>
          {labelName} {isRequired && <span style={{ color: "red" }}>*</span>}
        </label>
        {type !== "textarea" ? (
          <>
            {!readOnly ? (
              <input
                className={`troo-input-all ${
                  type === "date" ? "type-data" : ""
                }`}
                id={name}
                name={name}
                onBlur={onBlur}
                type={isShowPassword ? "text" : type}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
              />
            ) : (
              <input
                className={`troo-input-all ${
                  type === "date" ? "type-data" : ""
                }`}
                id={name}
                name={name}
                onBlur={onBlur}
                type={isShowPassword ? "text" : type}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                readOnly
              />
            )}
            {rightText ? <div className="rightText">{rightText}</div> : null}
          </>
        ) : (
          <textarea
            className="troo-input-all textarea"
            id={name}
            name={name}
            onBlur={onBlur}
            type={isShowPassword ? "text" : type}
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
          />
        )}
        {type === "password" && (
          <div className="password" onClick={handlePasswordChange}>
            {isShowPassword ? (
              <i class="fa fa-eye" aria-hidden="true"></i>
            ) : (
              password()
            )}
          </div>
        )}
      </div>
      {bottomlabel && <div className="bottom-lable">{bottomlabel}</div>}
    </>
  ) : (
    <>
      <div className={`troo-input-field ${isOpen ? "open" : ""}`}>
        <label className="troo-label c-black" htmlFor={type}>
          {labelName}
        </label>
        {/* check */}

        <select
          className="dropdown-header"
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          onClick={onOpenCloseArrowHandler}
        >
          <option key={0} value="" disabled label={placeholder} />
          {isDropDown.map((item, index) => (
            <option key={index + 1} value={item.option} label={item.option} />
          ))}
        </select>

        {/* check */}
      </div>
      {bottomlabel && <div className="bottom-lable">{bottomlabel}</div>}
    </>
  );
};

export default InputField;
