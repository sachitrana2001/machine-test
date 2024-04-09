import React from "react";
import InputField from "@/SubComponent/InputField";
import { LeaseFields, LoanFields, FinancialData } from "../constant/index.js";
const Financial = ({ values, setFieldValue, handleBlur, handleChange }) => {
  const getFinancingDetailsFeilds = () => {
    if (values?.isFinanced === "Loan") {
      return LoanFields;
    } else if (values?.isFinanced === "Lease") {
      return LeaseFields;
    }
    return [];
  };
  const financingOptions = [
    {
      value: "Loan",
      label: "Loan",
      description: "This Vehicle Associated with the loan",
    },
    {
      value: "Lease",
      label: "Lease",
      description: "This Vehicle Associated with the lease",
    },
    {
      value: "No Financing",
      label: "No Financing",
      description: "This Vehicle has no financing",
    },
  ];
  console.log("fininall==>", values);
  return (
    <>
      {FinancialData?.map((items, index) => (
        <div className={`add-v-form ${index > 0 ? "pt-104" : ""}`}>
          <div className="add-v-form-left-section">
            <div className="heading-600-16 c-blue1">{items.left.title}</div>
            <div className="heading-400-12 c-gray2">{items.left.para}</div>
          </div>
          <div className="add-v-form-right-section">
            <div className="add-v-form-section">
              {items.right.map((fields, index) => (
                <>
                  <div className={fields.block_type} key={index}>
                    {fields.block_type === "field-type-one" && (
                      <InputField
                        labelName={fields.labelName}
                        placeholder={fields.placeholder}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type={fields.input_type}
                        name={fields.name}
                        value={values?.[fields.name]}
                      />
                    )}
                    {fields.block_type === "field-type-two" && (
                      <>
                        <InputField
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values?.[fields?.name1]}
                          //   isDropDown={fields.isDropDown1}
                        />
                        {/* {errors[fields.name1] &&
                                      touched[fields.name1] && (
                                        <div className="error-message">
                                          {errors[fields.name1]}
                                        </div>
                                      )} */}
                        <InputField
                          labelName={fields.labelName2}
                          placeholder={fields.placeholder2}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type2}
                          name={fields.name2}
                          value={values?.[fields?.name2]}
                        />
                      </>
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className={`add-v-form pt-104`}>
        <div className="add-v-form-left-section">
          <div className="heading-600-16 c-blue1">Financing Details</div>
          <div className="heading-400-12 c-gray2">
            Vehicle Financing Information
          </div>
        </div>
        <div className="add-v-form-right-section">
          <div className="add-v-form-section">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                width: "100%",
                borderRadius: "5px",
                border: `1px solid #E0E0E0`,
              }}
            >
              {financingOptions.map((option) => (
                <label
                  key={option.value}
                  style={{
                    display: "flex",
                    gap: "10px",
                    border: `1px solid #E0E0E0`,
                    backgroundColor: `${
                      values.isFinanced === option.value
                        ? "#DFF7FF"
                        : "transparent"
                    }`,
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="isFinanced"
                    value={option.value}
                    onChange={handleChange}
                    checked={values.isFinanced === option.value}
                  />
                  <div>
                    {option.label}
                    <br />
                    <span style={{ fontSize: "12px", color: "#A6A6A6" }}>
                      {option.description}
                    </span>
                  </div>
                </label>
              ))}
            </div>
            {getFinancingDetailsFeilds()?.map((fields, index) => (
              <>
                <div className={fields.block_type} key={index}>
                  {fields.block_type === "field-type-one" && (
                    <InputField
                      labelName={fields.labelName}
                      placeholder={fields.placeholder}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type={fields.input_type}
                      name={fields.name}
                      value={values?.[fields.name]}
                    />
                  )}
                  {fields.block_type === "field-type-two" && (
                    <>
                      <InputField
                        labelName={fields.labelName1}
                        placeholder={fields.placeholder1}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type={fields.input_type1}
                        name={fields.name1}
                        value={values?.[fields.name1]}
                        //   isDropDown={fields.isDropDown1}
                      />
                      <InputField
                        labelName={fields.labelName2}
                        placeholder={fields.placeholder2}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type={fields.input_type2}
                        name={fields.name2}
                        value={values?.[fields.name2]}
                      />
                    </>
                  )}
                  {fields.input_type === "checkbox" && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type={fields.input_type}
                        name={fields.name}
                        onChange={(e) =>
                          setFieldValue(fields.name, e.target.checked)
                        }
                        checked={values?.[fields.name]}
                      />
                      <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                        <p>
                          <span style={{ fontWeight: "bold" }}>
                            {fields.labelName}
                          </span>
                          <br />
                          {fields.placeholder}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Financial;
