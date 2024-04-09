import React, { useState } from "react";
import { password } from "@/assets/Icons";
const TextField = ({
  labelName,
  name,
  type,
  value,
  onChange,
  placeholder,
  onBlur,
  helpertext,
  isRequired,
  suffix,
  readOnly,
  key,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleInputChange = (e) => {
    onChange(e);
  };
  const handlePasswordChange = () => {
    setIsShowPassword(!isShowPassword);
  };
  // console.log(" input-values-->>", value);
  return (
    <>
      <div className="troo-input-field" key={key}>
        <label className="troo-label c-black" htmlFor={type}>
          {labelName} {isRequired && <span style={{ color: "red" }}>*</span>}
        </label>
        {
          <>
            {!readOnly ? (
              <input
                className={`troo-input-all`}
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
            {suffix ? <div className="rightText">{suffix}</div> : null}
          </>
        }
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
      {helpertext && <div className="bottom-lable">{helpertext}</div>}
    </>
  );
};

export default TextField;
