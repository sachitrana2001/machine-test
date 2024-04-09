import React, { useState } from "react";
import "../../Add_Vehicles/AddVehicles.css";
import InputField from "@/SubComponent/InputField";
import { useFormik } from "formik";
// import { modelEuroTypeSchema } from '@/Schema';
import axios from "axios";
import {
  detailsIcon,
  settingIcon1,
  specifications,
  lifeCycle,
  financialIcon,
  maintanceIcon,
} from "@/assets/Icons";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "@/SubComponent/BreadCrumbs";
import { modelEuroTypeSchema } from "@/Schema";
const addVehiclesInitialValues = {
  modelEuroTypeName: "",
};

const AddVehicles = () => {
  const boldItem = "Depot Fleet Operation";
  const tabs = [
    { icon: detailsIcon({ width: 11, height: 12 }), tabName: "Details" },
    {
      icon: specifications({ width: 11, height: 12 }),
      tabName: "Specifications",
    },
    { icon: lifeCycle({ width: 11, height: 12 }), tabName: "Lifecycle" },
    { icon: financialIcon({ width: 11, height: 12 }), tabName: "Financial" },
    { icon: settingIcon1({ width: 11, height: 12 }), tabName: "Settings" },
    { icon: maintanceIcon({ width: 11, height: 12 }), tabName: "Maintenance" },
  ];
  const [isActiveTabs, setIsActiveTab] = useState("Details");
  const hasActiveTabHandler = (active) => {
    setIsActiveTab(active);
  };

  const navigate = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: addVehiclesInitialValues,
      validationSchema: modelEuroTypeSchema,
      onSubmit: async (value) => {
        console.log("onSubmit formik-->>", value);
        const url = "https://erp.sugamyatra.up.in/api/modelEuros/insert";
        try {
          const data = {
            modelEuroTypeName: value?.modelEuroTypeName,
          };

          const token = localStorage.getItem("userToken");
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };

          const response = await axios.post(url, data, {
            headers: headers,
          });
          if (response) {
            navigate("/vehicles");
          }
        } catch (error) {
          console.error(error);
        }
      },
    });
  const formData = [
    {
      left: {
        title: "Add Model Euro (En)",
        para: "Add Model Euro Detail Here",
      },
      right: [
        {
          block_type: "field-type-five",
          name1: "modelEuroTypeName",
          input_type1: "text",
          labelName1: "Model Euro Name",
          placeholder1: "Enter Model Euro Name",
          name2: "modelEuroShortName",
          input_type2: "text",
          labelName2: "Model Euro Short Name",
          placeholder2: "Enter Model Euro Short Name",
        },
      ],
    },
    {
      left: {
        title: "Add Model Euro (Hi)",
        para: "Add Model Euro Detail Here",
      },
      right: [
        {
          block_type: "field-type-five",
          name1: "modelEuroName",
          input_type1: "text",
          labelName1: "Model Euro Name",
          placeholder1: "Enter Model Euro Name",
          name2: "modelEuroShortName",
          input_type2: "text",
          labelName2: "Model Euro Short Name",
          placeholder2: "Enter Model Euro Short Name",
        },
      ],
    },
  ];

  console.log("submit error-->>", errors);

  return (
    <div className="add-v-main-container">
      <div className="add-v-form-container">
        <div className="add-v-form-top-section ">
          <div className="top-upper-section d-h-between">
            <div>
              <BreadCrumbs breadCrumbs={[{}]} boldItem={boldItem} />
              <div className="heading-600-24 c-blue1 v-center pt-7x">
                New Model Euro
              </div>
            </div>
          </div>
          <div className="top-bottom-section"></div>
        </div>
        <div className="add-v-form-bottom-section">
          <div
            style={{
              height: "calc(100vh - 345px)",
              overflowY: "scroll",
              paddingBottom: "20px",
            }}
          >
            <form onSubmit={handleSubmit}>
              {formData.map((items, index) => (
                <div className={`add-v-form ${index > 0 ? "pt-43" : ""}`}>
                  <div className="add-v-form-left-section">
                    <div className="heading-600-16 c-blue1">
                      {items.left.title}
                    </div>
                    <div className="heading-400-12 c-gray2">
                      {items.left.para}
                    </div>
                  </div>
                  <div className="add-v-form-right-section">
                    <div className="add-v-form-section">
                      {items.right.map((fields, index) => (
                        <>
                          <div className={fields.block_type} key={index}>
                            {fields.block_type === "field-type-five" && (
                              <>
                                <div className="w-100">
                                  <InputField
                                    labelName={fields.labelName1}
                                    placeholder={fields.placeholder1}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type={fields.input_type1}
                                    name={fields.name1}
                                    value={values.textField}
                                    isDropDown={fields.isDropDown1}
                                    bottomlabel={fields.bottomlabel}
                                  />
                                  {errors[fields.name1] &&
                                    touched[fields.name1] && (
                                      <div className="error-message">
                                        {errors[fields.name1]}
                                      </div>
                                    )}
                                </div>
                                <div className="w-100">
                                  <InputField
                                    labelName={fields.labelName2}
                                    placeholder={fields.placeholder2}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type={fields.input_type2}
                                    name={fields.name2}
                                    value={values.textField}
                                    isDropDown={fields.isDropDown2}
                                  />
                                  {errors[fields.name2] &&
                                    touched[fields.name2] && (
                                      <div className="error-message">
                                        {errors[fields.name2]}
                                      </div>
                                    )}
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
              <div className="formik-wrap-button">
                <button
                  className="outline-btn heading-700-15"
                  onClick={() => navigate("/vehicles")}
                >
                  Cancel
                </button>
                <button className="outline-btn heading-700-15">
                  Save & Add New
                </button>
                <button className="blue-button heading-700-15" type="submit">
                  Save Vehicle
                </button>
              </div>
            </form>
          </div>
          {/* } */}
        </div>
      </div>
    </div>
  );
};

export default AddVehicles;
