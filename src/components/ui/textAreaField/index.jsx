import React from "react";
const TextAreaField = ({
  labelName,
  name,
  value,
  onChange,
  placeholder,
  onBlur,
  helpertext,
  isRequired,
  suffix,
  key,
}) => {
  const handleInputChange = (e) => {
    onChange(e);
  };

  return (
    <>
      <div className="troo-input-field" key={key}>
        <label className="troo-label c-black" htmlFor={name}>
          {labelName} {isRequired && <span style={{ color: "red" }}>*</span>}
        </label>
        {
          <>
            <textarea
              className="troo-input-all textarea"
              id={name}
              name={name}
              onBlur={onBlur}
              value={value}
              onChange={handleInputChange}
              placeholder={placeholder}
            />
            {suffix ? <div className="rightText">{suffix}</div> : null}
          </>
        }
      </div>
      {helpertext && <div className="bottom-lable">{helpertext}</div>}
    </>
  );
};

export default TextAreaField;
