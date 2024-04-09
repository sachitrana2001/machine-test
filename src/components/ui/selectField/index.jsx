import React, { useState } from "react";
const SelectField = ({
  labelName,
  name,
  value,
  onChange,
  placeholder,
  onBlur,
  options,
  helpertext,
  key,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenCloseArrowHandler = () => setIsOpen(!isOpen);
  return (
    <>
      <div className={`troo-input-field ${isOpen ? "open" : ""}`}>
        <label className="troo-label c-black" htmlFor={name}>
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
          {options.map((item, index) => (
            <option key={index + 1} value={item.option} label={item.option} />
          ))}
        </select>

        {/* check */}
      </div>
      {helpertext && <div className="bottom-lable">{helpertext}</div>}
    </>
  );
};

export default SelectField;
