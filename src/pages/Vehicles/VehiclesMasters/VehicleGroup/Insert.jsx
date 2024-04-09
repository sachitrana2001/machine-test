import React, { useState } from "react";
import "../../Add_Vehicles/AddVehicles.css";
import BreadCrumbs from "@/SubComponent/BreadCrumbs";
import InputField from "@/SubComponent/InputField";
import { useFormik } from "formik";
import { AddVehiclesSchema } from "@/Schema";
import LifeCycle from "../../Add_Vehicles/AddVehicleStepper/LifeCycle";
import Cost from "../../Add_Vehicles/AddVehicleStepper/Cost";
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
const addVehiclesInitialValues = {
  registrationNumber: "",
  chassisBody: "",
  fuelType: "",
  manufacturingYear: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleTrim: "",
  vehicleEuro: "",
  vehicleColour: "",
  chassisNumber: "",
  enginNumber: "",
  registrationState: "",

  registrationDate: "",
  serviceAllotmentDate: "",
  insuranceValidityDate: "",
  roadTaxValidityData: "",
  pollutionValidity: "",
  vState: "",
  vRegion: "",
  vDepot: "",
  vehicleCategory: "",
  // vehicleType:"",
  vehicleGroup: "",
  openingMeterReading: "",
  sittingConfiguration: "",
  seatsSitting: "",
  seatsSemiSleeper: "",
  seatsSleeper: "",
  vehicleServiceType: "",
  fabricator: "",
  ownership: "",
  operator: "",
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
      validationSchema: AddVehiclesSchema,
      onSubmit: async (value) => {
        console.log("onSubmit formik-->>", value);
        const url = "https://erp.sugamyatra.up.in/api/vehicles/insert";
        try {
          const data = {
            vehicleName: `${value.registrationNumber}-${value.vehicleMake}-${value.vehicleModel}`,
            vehicleNumber: value.registrationNumber,
            isVehicleNumberVerified: true,
            vehicleType: {
              fuel_type_id: "mongo_id",
              fuel_type: value.fuelType,
            },
            vehicleGroup: {
              fuel_type_id: "mongo_id",
              fuel_type: value.vehicleGroup,
            },
            meterReading: value.openingMeterReading,
            seatCapacity:
              value.seatsSitting + value.seatsSemiSleeper + value.seatsSleeper,
            vehicleMake: {
              fuel_type_id: "mongo_id",
              fuel_type: value.vehicleMake,
            },
            vehicleModel: {
              fuel_type_id: "mongo_id",
              fuel_type: value.vehicleModel,
            },
            vehicleTrim: {
              fuel_type_id: "mongo_id",
              fuel_type: value.vehicleTrim,
            },
            vehicleFuelType: {
              fuel_type_id: "mongo_id",
              fuel_type: value.fuelType,
            },
            vehicleModelEuro: {
              model_euro_id: "mongo_id",
              model_euro: value.vehicleEuro,
            },
            vehicleChassisType: {
              chassis_type_id: "mongo_id",
              chassis_type: value.chassisBody,
            },
            vehicleChassisNumber: value.chassisNumber,
            vehicleEngineNumber: value.enginNumber,
            vehicleManufactureYear: value.manufacturingYear,
            vehicleRegistrationState: {
              registration_state_id: "mongo_id",
              registration_state: value.registrationState,
            },
            vehicleRegistrationDate: value.registrationDate,
            vehicleServiceState: {
              service_state_id: "mongo_id",
              service_state: value.vState,
            },
            vehicleServiceRegion: {
              service_region_id: "mongo_id",
              service_region: value.vRegion,
            },
            vehicleServiceDepot: {
              service_depo_id: "mongo_id",
              service_depo: value.vDepot,
            },
            vehicleServiceType: {
              service_type_id: "mongo_id",
              service_type: value.vehicleServiceType,
            },
            vehicleServiceAllotmentDate: value.serviceAllotmentDate,
            vehicleInsuranceValidityDate: value.insuranceValidityDate,
            vehicleRoadTaxValidityDate: value.roadTaxValidityData,
            vehiclePollutionCheckValidityDate: value.pollutionValidity,
            fabricator: value.fabricator,
            vehicleCategory: {
              category_id: "mongo_id",
              category: value.vehicleCategory,
            },
            vehicleOwner: value.ownership,
            vehicleColor: {
              color_id: "mongo_id",
              color: value.vehicleColour,
            },
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
          block_type: "field-type-four",
          name1: "vehicleTypeName",
          input_type1: "text",
          labelName1: "Vehicle Type Name",
          placeholder1: "Enter Vehicle Type Name",
          name2: "vehicleTypeShortName",
          input_type2: "text",
          labelName2: "Vehicle Type Short Name",
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
          block_type: "field-type-four",
          name1: "vehicleTypeName",
          input_type1: "text",
          labelName1: "Vehicle Type Name",
          placeholder1: "Enter Vehicle Type Short Name",
          name2: "vehicleTypeShortName",
          input_type2: "text",
          labelName2: "Vehicle Type Short Name",
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
            <div className="add-v-form-top-button">
              <button
                className="outline-btn heading-700-15"
                onClick={() => navigate("/vehicles")}
              >
                Cancel
              </button>
              <button className="outline-btn heading-700-15">
                Save & Add New
              </button>
              <button
                className={`blue-button heading-700-15 ${
                  isActiveTabs === "Details" ? "visible-hidden" : ""
                }`}
              >
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
                            {fields.block_type === "field-type-four" && (
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
                                    bottomlabel={fields.bottomlabel1}
                                  />
                                  {errors[fields.name1] &&
                                    touched[fields.name1] && (
                                      <div className="error-message">
                                        {errors[fields.name1]}
                                      </div>
                                    )}
                                </div>
                                <div>
                                  <InputField
                                    labelName={fields.labelName2}
                                    placeholder={fields.placeholder2}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type={fields.input_type2}
                                    name={fields.name2}
                                    value={values.textField}
                                    isDropDown={fields.isDropDown2}
                                    bottomlabel={fields.bottomlabel2}
                                  />
                                  {errors[fields.name2] &&
                                    touched[fields.name2] && (
                                      <div className="error-message">
                                        {errors[fields.name2]}
                                      </div>
                                    )}
                                </div>
                                <div>
                                  <InputField
                                    labelName={fields.labelName3}
                                    placeholder={fields.placeholder3}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type={fields.input_type3}
                                    name={fields.name3}
                                    value={values.textField}
                                    isDropDown={fields.isDropDown3}
                                    bottomlabel={fields.bottomlabel3}
                                  />
                                  {errors[fields.name3] &&
                                    touched[fields.name3] && (
                                      <div className="error-message">
                                        {errors[fields.name3]}
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
              <button
                className="blue-button add-vehicle-save-btn heading-700-15"
                type="submit"
              >
                Save Vehicle
              </button>
            </form>
          </div>
          {/* } */}
        </div>
      </div>
    </div>
  );
};

export default AddVehicles;
