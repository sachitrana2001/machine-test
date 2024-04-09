import React, { useState } from "react";
import "../../Add_Vehicles/AddVehicles.css";
import BreadCrumbs from "@/SubComponent/BreadCrumbs";
import InputField from "@/SubComponent/InputField";
import { useFormik } from "formik";
import { AddVehiclesSchema } from "@/Schema";
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
        title: "Add Bus Category  (En)",
        para: "Add Bus Category Detail Here",
      },
      right: [
        {
          block_type: "field-type-one",
          name: "busCategoryName",
          input_type: "text",
          labelName: "Bus Category Name",
          placeholder: "Enter Bus Category Name",
        },
        {
          block_type: "field-type-one",
          name: "busCategoryShortName",
          input_type: "text",
          labelName: "Bus Category Short Name",
          placeholder: "Enter Bus Category Short Name",
        },
      ],
    },
    {
      left: {
        title: "Add Bus Category (Hi)",
        para: "Add Bus Category Detail Here",
      },
      right: [
        {
          block_type: "field-type-one",
          name: "busCategoryName",
          input_type: "text",
          labelName: "Bus Category Name",
          placeholder: "Enter Bus Category Name",
        },
        {
          block_type: "field-type-one",
          name: "busServiceTypeShortName",
          input_type: "text",
          labelName: "Bus Service Type Short Name",
          placeholder: "Enter Bus Service Type Short Name",
        },
      ],
    },
  ];
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleRadioSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  console.log("submit error-->>", errors);

  return (
    <div className="add-v-main-container">
      <div className="add-v-form-container">
        <div className="add-v-form-top-section ">
          <div className="top-upper-section d-h-between">
            <div>
              <BreadCrumbs breadCrumbs={[{}]} boldItem={boldItem} />
              <div className="heading-600-24 c-blue1 v-center pt-7x">
                New Bus Service Type
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
                            {fields.block_type === "field-type-one" && (
                              <>
                                <InputField
                                  labelName={fields.labelName}
                                  placeholder={fields.placeholder}
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  type={fields.input_type}
                                  name={fields.name}
                                  value={values.textField}
                                  isDropDown={fields.isDropDown1}
                                />
                                {errors[fields.name] &&
                                  touched[fields.name] && (
                                    <div className="error-message">
                                      {errors[fields.name]}
                                    </div>
                                  )}
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
                Save
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
