import React, { useEffect, useState } from "react";
import "../../Add_Vehicles/AddVehicles.css";
import BreadCrumbs from "@/SubComponent/BreadCrumbs";
import InputField from "@/SubComponent/InputField";
import { useFormik } from "formik";

import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

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

const AddVehicles = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({
    makeName: "",
    makeCode: "",
    makeNameHindi: "",
    makeShortName: "",
    countryOfOrigin: "",
    is_active: true,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location?.state?.isEdit) {
      const editData = location?.state?.rowData;
      console.log(editData);
      setData((prev) => ({
        ...prev,
        makeName: editData?.makeName,
        makeCode: editData?.makeCode,
        makeNameHindi: editData?.makeName,
        makeShortName: editData?.makeShortName,
        countryOfOrigin: editData?.countryOfOrigin,
      }));
    }
  }, [location]);
  console.log({ data });
  useEffect(() => {
    // Check if editData is set to indicate loading has finished
    if (data !== undefined) {
      setLoading(false);
    }
  }, [data]);

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: data,
      // validationSchema: AddVehiclesSchema,
      onSubmit: async (value) => {
        console.log("onSubmit formik-->>", value);
        const url = "https://erp.sugamyatra.up.in/api/vehicleMakes/insert";
        try {
          const data = {
            makeName: value?.makeName,
            makeCode: value?.makeCode,
            makeNameHindi: value?.makeName,
            makeShortName: value?.makeShortName,
            countryOfOrigin: value?.countryOfOrigin,
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
            navigate("/make-list");
          }
        } catch (error) {
          console.error(error);
        }
      },
    });

  const formData = [
    {
      left: {
        title: "Add Vehicle Make(En)",
        para: "Add Vehicle Make Detail Here",
      },
      right: [
        {
          block_type: "field-type-one",
          name1: "makeName",
          input_type1: "text",
          labelName1: "Vehicle Make Name",
          placeholder1: "Enter Vehicle Make Short Name",
          name2: "makeShortName",
          input_type2: "text",
          labelName2: "Vehicle Make Short Name",
          placeholder2: "Enter Vehicle Make Short Name",
        },
        {
          block_type: "field-type-two",
          name: "countryOfOrigin",
          input_type: "select",
          isDropDown: indianStates,
          labelName: "Country of Origin",
          placeholder: "Select Country of Origin",
        },
      ],
    },
    {
      left: {
        title: "Add Vehicle Make (Hi)",
        para: "Add Vehicle Make Detail Here",
      },
      right: [
        {
          block_type: "field-type-one",
          name1: "makeName",
          input_type1: "text",
          labelName1: "Vehicle Make Name",
          placeholder1: "Enter Vehicle Make Short Name",
          name2: "makeShortName",
          input_type2: "text",
          labelName2: "Vehicle Make Short Name",
          placeholder2: "Enter Vehicle Make Short Name",
        },
        {
          block_type: "field-type-two",
          name: "countryOfOrigin",
          input_type: "select",
          isDropDown: indianStates,
          labelName: "Country of Origin",
          placeholder: "Select Country of Origin",
        },
      ],
    },
  ];

  console.log("submit error-->>", errors, values);

  return (
    <div className="add-v-main-container">
      <div className="add-v-form-container">
        <form onSubmit={handleSubmit}>
          <div className="add-v-form-top-section ">
            <div className="top-upper-section d-h-between">
              <div>
                <BreadCrumbs
                  breadCrumbs={[{ name: "Master Setting" }]}
                  boldItem={"Vehicle Make"}
                />
                <div className="heading-600-24 c-blue1 v-center pt-7x">
                  New Vehicle Make{" "}
                </div>
              </div>
              <div className="add-v-form-top-button flex gap-6">
                <button
                  className="outline-btn heading-700-15"
                  onClick={() => navigate("/vehicles")}
                >
                  Cancel
                </button>
                <button className="outline-btn heading-700-15">
                  Save & Add New
                </button>
                <button className={`blue-button heading-700-15`} type="submit">
                  Save
                </button>
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
              {formData.map((items, index) => (
                <div
                  className={`add-v-form ${index > 0 ? "pt-43" : ""}`}
                  key={index}
                >
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
                        <div className={fields.block_type} key={index}>
                          {fields.block_type === "field-type-one" && (
                            <div className="flex gap-4">
                              <InputField
                                labelName={fields.labelName1}
                                placeholder={fields.placeholder1}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type={fields.input_type1}
                                name={fields.name1}
                                value={values?.[fields.name1]}
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
                            </div>
                          )}
                          {fields.block_type === "field-type-two" && (
                            <div className="flex w-1/2 mr-6">
                              <InputField
                                labelName={fields.labelName}
                                placeholder={fields.placeholder}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type={fields.input_type}
                                name={fields.name}
                                value={values?.[fields.name]}
                                isDropDown={fields?.isDropDown}
                              />
                              {errors[fields.name] && touched[fields.name] && (
                                <div className="error-message">
                                  {errors[fields.name]}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicles;
