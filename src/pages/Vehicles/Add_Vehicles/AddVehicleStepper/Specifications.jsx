import React from "react";
import { specificationsData } from "../constant";
import InputField from "@/SubComponent/InputField";
const Specifications = ({ values, handleChange, handleBlur }) => {
  return (
    <div className="">
      {specificationsData.map((items, index) => (
        <div className={`add-v-form ${index > 0 ? "pt-43" : ""}`}>
          <div className="add-v-form-left-section">
            <div className="heading-600-16 c-blue1">{items.left.title}</div>
            <div className="heading-400-12 c-gray2">{items.left.para}</div>

            {items.left.title1 && (
              <>
                <div className="heading-600-16 c-blue1 mt-12">
                  {items.left.title1}
                </div>
                <div className="heading-400-12 c-gray2">{items.left.para1}</div>
              </>
            )}
            {items.left.title2 && (
              <>
                <div
                  className="heading-600-16 c-blue1"
                  style={{ marginTop: "100px" }}
                >
                  {items.left.title2}
                </div>
                <div className="heading-400-12 c-gray2">{items.left.para2}</div>
              </>
            )}
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
                        value={values.textField}
                      />
                    )}
                    {fields.block_type === "field-type-two" && (
                      <>
                        <InputField
                          labelName={fields.labelName}
                          placeholder={fields.placeholder}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type}
                          name={fields.name}
                          value={values.number}
                        />
                        <button className="blue-button-56 heading-600-14">
                          Check by VAHAN
                        </button>
                      </>
                    )}

                    {fields.block_type === "field-type-three" && (
                      <>
                        <InputField
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values.textField}
                        />
                        <InputField
                          labelName={fields.labelName2}
                          placeholder={fields.placeholder2}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type2}
                          name={fields.name2}
                          value={values.textField}
                        />
                        <div className="field-type-three-right-section">
                          <InputField
                            labelName={fields.labelName3}
                            placeholder={fields.placeholder3}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type3}
                            name={fields.name3}
                            value={values.textField}
                          />
                          <InputField
                            labelName={fields.labelName4}
                            placeholder={fields.placeholder4}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type4}
                            name={fields.name4}
                            value={values.textField}
                          />
                        </div>
                      </>
                    )}

                    {fields.block_type === "field-type-four" && (
                      <>
                        <InputField
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values.textField}
                          isDropDown={fields.isDropDown1}
                          rightText={fields.rightText1}
                        />
                        <InputField
                          labelName={fields.labelName2}
                          placeholder={fields.placeholder2}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type2}
                          name={fields.name2}
                          value={values.textField}
                          isDropDown={fields.isDropDown2}
                          rightText={fields.rightText2}
                        />
                        <InputField
                          labelName={fields.labelName3}
                          placeholder={fields.placeholder3}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type3}
                          name={fields.name3}
                          value={values.textField}
                          isDropDown={fields.isDropDown3}
                          rightText={fields.rightText3}
                        />
                      </>
                    )}

                    {fields.block_type === "field-type-five" && (
                      <>
                        <InputField
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values.textField}
                          rightText={fields.rightText1}
                        />
                        <InputField
                          labelName={fields.labelName2}
                          placeholder={fields.placeholder2}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type2}
                          name={fields.name2}
                          value={values.textField}
                          rightText={fields.rightText2}
                        />
                      </>
                    )}
                    {fields.block_type === "field-type-six" && (
                      <>
                        <InputField
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values.textField}
                        />
                        <InputField
                          labelName={fields.labelName2}
                          placeholder={fields.placeholder2}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type2}
                          name={fields.name2}
                          value={values.textField}
                        />
                      </>
                    )}
                    {fields.block_type === "field-type-seven" && (
                      <>
                        <InputField
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values.textField}
                        />
                      </>
                    )}

                    {fields.block_type === "field-type-eight" && (
                      <>
                        <InputField
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values.textField}
                        />
                        <InputField
                          labelName={fields.labelName2}
                          placeholder={fields.placeholder2}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type2}
                          name={fields.name2}
                          value={values.textField}
                        />
                        <InputField
                          labelName={fields.labelName3}
                          placeholder={fields.placeholder3}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type3}
                          name={fields.name3}
                          value={values.textField}
                        />
                      </>
                    )}

                    {fields.block_type === "field-type-nine" && (
                      <>
                        <InputField
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values.textField}
                          rightText={fields.rightText1}
                        />
                      </>
                    )}

                    {fields.block_type === "field-type-ten" && (
                      <>
                        <div className="type-ten-left">
                          {fields.leftSection.map((items, index) => (
                            <div className={items.block_type} key={index}>
                              {items.block_type === "field-type-six" && (
                                <>
                                  <InputField
                                    key={index + items.labelName1}
                                    labelName={items.labelName1}
                                    placeholder={items.placeholder1}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type={items.input_type1}
                                    name={fields.name1}
                                    value={values[items.input_type1]}
                                  />
                                  <InputField
                                    key={index + items.labelName1}
                                    labelName={items.labelName2}
                                    placeholder={items.placeholder2}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type={items.input_type2}
                                    name={fields.name2}
                                    value={values[items.input_type2]}
                                  />
                                </>
                              )}
                              {items.block_type === "field-type-seven" && (
                                <>
                                  <InputField
                                    labelName={items.labelName1}
                                    placeholder={items.placeholder1}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type={items.input_type1}
                                    name={fields.name1}
                                    value={values.textField}
                                  />
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="type-ten-right-container">
                          <div className="heading-500-12">
                            Dimension Preview
                          </div>
                          <div className="type-ten-right">
                            <div className="type-ten-right-img-div">
                              <img
                                className="bus-img"
                                src="/assets/BusPreview.svg"
                                alt="Bus Preview"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Specifications;
