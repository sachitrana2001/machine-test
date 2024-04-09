import React, { useState } from "react";
import "../../Add_Vehicles/AddVehicles.css";
import BreadCrumbs from "@/SubComponent/BreadCrumbs";
import InputField from "@/SubComponent/InputField";
import { useFormik } from "formik";
import { vehicleTypeSchema } from "@/Schema";
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
const indianStates = [
  { option: "Andaman and Nicobar Islands" },
  { option: "Andhra Pradesh" },
  { option: "Arunachal Pradesh" },
  { option: "Assam" },
  { option: "Bihar" },
  { option: "Chandigarh" },
  { option: "Chhattisgarh" },
  { option: "Dadra and Nagar Haveli" },
  { option: "Daman and Diu" },
  { option: "Delhi" },
  { option: "Goa" },
  { option: "Gujarat" },
  { option: "Haryana" },
  { option: "Himachal Pradesh" },
  { option: "Jammu and Kashmir" },
  { option: "Jharkhand" },
  { option: "Karnataka" },
  { option: "Kerala" },
  { option: "Ladakh" },
  { option: "Lakshadweep" },
  { option: "Madhya Pradesh" },
  { option: "Maharashtra" },
  { option: "Manipur" },
  { option: "Meghalaya" },
  { option: "Mizoram" },
  { option: "Nagaland" },
  { option: "Odisha" },
  { option: "Puducherry" },
  { option: "Punjab" },
  { option: "Rajasthan" },
  { option: "Sikkim" },
  { option: "Tamil Nadu" },
  { option: "Telangana" },
  { option: "Tripura" },
  { option: "Uttar Pradesh" },
  { option: "Uttarakhand" },
  { option: "West Bengal" },
];
const masterVehiclesTypeInitialValues = {
  vehicleTypeName: "",
  vehicleTypeCode: "",
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
      initialValues: masterVehiclesTypeInitialValues,
      validationSchema: vehicleTypeSchema,
      onSubmit: async (value) => {
        console.log("onSubmit formik-->>", value);
        const url = "https://erp.sugamyatra.up.in/api/vehicleTypes/insert";
        try {
          const data = {
            vehicleTypeName: value?.vehicleTypeName,
            vehicleTypeNameHindi: "Vatana Kuleet",
            vehicleTypeCode: value?.vehicleTypeCode,
            is_active: true,
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
        title: "Add Vehicle Type(En)",
        para: "Add Vehicle Type Detail Here",
      },
      right: [
        {
          block_type: "field-type-five",
          name1: "vehicleTypeName",
          input_type1: "text",
          labelName1: "Vehicle Type Name",
          placeholder1: "Enter Vehicle Type Name",
          name2: "vehicleTypeCode",
          input_type2: "text",
          labelName2: "Vehicle Type Code",
          placeholder2: "Enter Vehicle Type Short Name",
        },
      ],
    },
    {
      left: {
        title: "Add Vehicle Type (Hi)",
        para: "Add Vehicle Type Detail Here",
      },
      right: [
        {
          block_type: "field-type-five",
          name1: "vehicleTypeName",
          input_type1: "text",
          labelName1: "Vehicle Type Name",
          placeholder1: "Enter Vehicle Type Short Name",
          name2: "vehicleTypeShortName",
          input_type2: "text",
          labelName2: "Vehicle Type Code",
          placeholder2: "Enter Vehicle Type Short Name",
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
                New Vehicle Type
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
