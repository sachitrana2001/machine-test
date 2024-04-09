import React from "react";
import InputField from "@/SubComponent/InputField";
import { lifecycleData } from "../constant";

const LifeCycle = ({ values, setFieldValue, handleChange, handleBlur }) => {
  console.log("lifeCycle", values);
  return lifecycleData.map((items, index) => (
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
                {fields.block_type === "field-type-one" &&
                  (fields.input_type === "checkbox" ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type={fields.input_type}
                        name={fields.name}
                        onChange={(e) =>
                          setFieldValue(fields.name, e.target.checked)
                        }
                        checked={values?.[fields.name]}
                      />
                      <p style={{ marginLeft: "10px", fontSize: "12px" }}>
                        {fields.labelName}
                      </p>
                    </div>
                  ) : (
                    <InputField
                      labelName={fields.labelName}
                      placeholder={fields.placeholder}
                      onBlur={handleBlur}
                      name={fields.name}
                      onChange={handleChange}
                      type={fields.input_type}
                      value={values?.[fields.name]}
                      bottomlabel={fields?.bottomLabel}
                    />
                  ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  ));
};

export default LifeCycle;
