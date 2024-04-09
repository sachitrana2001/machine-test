import React, { useState, useEffect } from "react";
import "./AddVehicles.css";
import BreadCrumbs from "@/SubComponent/BreadCrumbs";
import { useFormik } from "formik";
import { AddVehiclesSchema } from "@/Schema";
import LifeCycle from "./AddVehicleStepper/LifeCycle";
import Cost from "./AddVehicleStepper/Cost";
import axios from "axios";
import {
  detailsIcon,
  settingIcon1,
  specifications,
  lifeCycle,
  financialIcon,
  maintanceIcon,
} from "@/assets/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import Specifications from "./AddVehicleStepper/Specifications";
import Financial from "./AddVehicleStepper/Financial";
import VehicleDetails from "./AddVehicleStepper/VehicleDetails";
import Maintenance from "./AddVehicleStepper/Maintenance";

const detailsCss = {
  height: "calc(100vh - 300px)",
  overflowY: "scroll",
  paddingBottom: "20px",
};

const getToken = localStorage.getItem("userToken");

const AddVehicles = () => {
  const location = useLocation();
  const [isEditURL, setEditURL] = useState(false);
  const [addVehiclesInitialValues, setAddVehiclesInitialValues] = useState({
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
    vState: "Uttar Pradesh",
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
    // specification
    dimensionsWidth: "",
    dimensionsHeight: "",
    dimensionsLength: "",
    dimensionsInteriorVolume: "",
    dimensionsPassengerVolume: "",
    dimensionsCargoVolume: "",
    dimensionsGroundClearance: "",
    dimensionsBedLength: "",
    weightCurbWeight: "",
    weightGrossVehicleWeight: "",
    performanceTowingCapacity: "",
    performanceMaxPayload: "",
    fuelMileageCity: "",
    fuelMileageHighway: "",
    fuelCapacityTank1: "",
    fuelCapacityTank2: "",
    fuelCngCapacity: "",
    fuelBatteryCapacity: "",
    oilCapacity: "",
    engineSummary: "",
    engineBrand: "",
    engineCompression: "",
    engineCylinders: "",
    engineDisplacement: "",
    engineFuelInduction: "",
    engineMaxHp: "",
    engineMaxTorque: "",
    engineValves: "",
    trnasmisssionType: "",
    trnasmisssionGear: "",
    trnasmisssionDescription: "",
    driveType: "",
    brakingSystem: "",
    wheelBase: "",
    FrontTrackWidth: "",
    FrontWheelDiameter: "",
    FrontTyreType: "",
    FrontTyrePSI: "",
    RearTrackWidth: "",
    RearWheelDiameter: "",
    RearTyreType: "",
    RearTyrePSI: "",

    //lifecycle
    inServiceDate: "",
    inServiceOdometer: "",
    estimatedSeviceLifeMonths: "",
    estimatedSeviceLifeOdometer: "",
    estimatedResaleValue: "",
    outOfServiceDate: "",
    outOfServiceOdometer: "",
    markOut: false,
    //financial
    purchaseVendor: "",
    purchaseDate: "",
    purchasePrice: "",
    purchaseOdometer: "",
    purchaseNotes: "",
    //financialDetails
    isFinanced: "No Financing",
  });

  const [isActiveTabs, setIsActiveTab] = useState("Details");
  const hasActiveTabHandler = (active) => {
    setIsActiveTab(active);
  };

  const boldItem = "Vehicles";
  const tabs = [
    { icon: detailsIcon({ width: 11, height: 12 }), tabName: "Details" },
    {
      icon: specifications({ width: 11, height: 12 }),
      tabName: "Specifications",
    },
    { icon: lifeCycle({ width: 11, height: 12 }), tabName: "Lifecycle" },
    { icon: financialIcon({ width: 11, height: 12 }), tabName: "Financial" },
    // { icon: settingIcon1({ width: 11, height: 12 }), tabName: "Settings" },
    { icon: maintanceIcon({ width: 11, height: 12 }), tabName: "Maintenance" },
  ];

  const navigate = useNavigate();
  const {
    values,
    errors,
    handleBlur,
    touched,
    setFieldValue,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: addVehiclesInitialValues,
    validationSchema: AddVehiclesSchema,
    enableReinitialize: true,
    onSubmit: async (value) => {
      console.log("onSubmit formik-->>", value);

      let url = "https://erp.sugamyatra.up.in/api/vehicles/insert";
      if (isEditURL) {
        url = "https://erp.sugamyatra.up.in/api/vehicles/update";
      }
      try {
        const data = {
          _id: location?.state?.editData?.id,
          vehicleName: `${value.registrationNumber}`,
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
            value?.seatsSitting + value?.seatsSemiSleeper + value?.seatsSleeper,
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
          vehicleManufactureYear: value?.manufacturingYear,
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
          // specification
          dimensions: {
            width: values.dimensionsWidth,
            height: value.dimensionsHeight,
            length: values.dimensionsLength,
            inetriorVolume: values.dimensionsInteriorVolume,
            passengerVolume: values.passengerVolume,
            cargoVolume: values.dimensionsCargoVolume,
            groundClearence: values.dimensionsGroundClearance,
            bedLength: values.bedLength,
          },

          weight: {
            curbWeight: values.weightCurbWeight,
            grossVehicleWeight: values.weightGrossVehicleWeight,
          },
          performance: {
            towingCapacity: values.performanceTowingCapacity,
            maxPayload: values.performanceMaxPayload,
          },
          fuel: {
            mileageCity: values.fuelMileageCity,
            mileageHighway: values.fuelMileageHighway,
            capacityTank1: values.fuelCapacityTank1,
            capacityTank2: values.fuelCapacityTank2,
            cngCapacity: values.fuelCngCapacity,
            batteryCapacity: values.fuelBatteryCapacity,
          },
          oilCapacity: values.oilCapacity,
          engine: {
            engineSummary: values.engineSummary,
            engineBrand: values.engineBrand,
            compression: values.engineCompression,
            cylinders: values.engineCylinders,
            displacement: values.engineDisplacement,
            fuelInduction: values.engineFuelInduction,
            maxHp: values.engineMaxHp,
            maxTorque: values.engineMaxTorque,
            valves: values.engineValves,
          },
          transmission: {
            trnasmisssionType: values.trnasmisssionType,
            trnasmisssionGear: values.trnasmisssionGear,
            trnasmisssionDescription: values.trnasmisssionDescription,
          },
          wheelsAndTyres: {
            driveType: values.driveType,
            brakingSystem: values.brakingSystem,
            wheelBase: values.wheelBase,
            frontTyre: {
              frontTrackWidth: values.FrontTrackWidth,
              frontWheelDiameter: values.FrontWheelDiameter,
              frontTyreType: values.FrontTyreType,
              frontTyrePsl: values.FrontTyrePSI,
            },
            rearTyre: {
              rearTrackWidth: values.RearTrackWidth,
              rearWheelDiameter: values.RearWheelDiameter,
              rearTyreType: values.RearTyreType,
              rearTyrePsl: values.RearTyrePSI,
            },
          },

          inService: {
            inServiceDate: value.inServiceDate,
            inServiceOdometer: value.inServiceOdometer,
          },
          lifeEstimation: {
            estimatedServiceLifeMonths: value.estimatedSeviceLifeMonths,
            estimatedServiceLifeOdometer: value.estimatedSeviceLifeOdometer,
            estimatedResaleValue: value.estimatedResaleValue,
          },
          outOfService: {
            outOfServiceDate: value.outOfServiceDate,
            outOfServiceOdometer: value.outOfServiceOdometer,
            markOut: value.markOut,
          },
          purchaseDetails: {
            purchaseVendor: value.purchaseVendor,
            purchaseDate: value.purchaseDate,
            purchasePrice: value.purchasePrice,
            purchaseOdometer: value.purchaseOdometer,
            notes: value.purchaseNotes,
          },
          isFinanced: value?.isFinanced,
          is_active: true,
        };

        if (value?.isFinanced === "Loan") {
          const financialDetails = {
            //send this object is when isFinanced === Loan
            vendor: "mongo_id",
            dateOfLease: value?.dateOfLease,
            capitalizedCost: value?.capitalizedCost,
            downPayment: value?.downPayment,
            firstPaymentDate: value?.firstPaymentDate,
            monthlyPayment: value?.monthlyPayment,
            instalments: value?.instalments,
            leaseEndDate: value?.leaseEndDate,
            residualValue: value?.residualValue,
            contractMileageLimit: value?.contractMileageLimit,
            excessMileageCharge: value?.excessMileageCharge,
            leaseNumber: value?.leaseNumber,
            notes: value?.LoanNotes,
            generateExpenses: value?.loanGenerateExpenses,
          };
          data.financialDetails = financialDetails;
        } else if (value?.isFinanced === "Lease") {
          const financialDetails = {
            //send this object is when isFinanced === Lease
            lender: "mongo_id",
            dateOfLoan: value?.dateOfLoan,
            amountOfLoan: value?.amountOfLoan,
            rateOfInterest: value?.rateOfInterest,
            downPayment: value?.downPayment,
            firstPaymentDate: value?.firstPaymentDate,
            monthlyPayment: value?.monthlyPayment,
            numberOfPayments: value?.numberOfPayments,
            loanEndDate: value?.loanEndDate,
            accountNumber: value?.accountNumber,
            notes: value?.leaseNotes,
            generateExpenses: value?.leaseGenerateExpenses,
          };
          data.financialDetails = financialDetails;
        } else {
          data.financialDetails = null;
        }

        const token = localStorage.getItem("userToken");
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        console.log("payload", data);

        // code for check how many fields are done

        // const filteredData = {};

        // for (const key in data) {
        //   // Check if the value associated with the key is not an empty string or an empty object
        //   if (data[key] !== "") {
        //     // Add the non-empty field to the filteredData object
        //     filteredData[key] = data[key];
        //   }
        // }

        // console.log("filteredData--->>>", filteredData);
        // end

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

  // console.log("getAllDropdownValue-->>",getAllDropdownValue);
  //  console.log("----data-->>",data9);
  // console.log("chassisType-->>>",data6)
  //  console.log("formik values-->>",values);

  useEffect(() => {
    if (location?.state?.status) {
      const { editData } = location?.state;
      setEditURL(true);
      // console.log("edit is working",typeof editData?.chassis);
      setAddVehiclesInitialValues((prev) => ({
        ...prev,
        registrationNumber: editData?.vechicleName,
        chassisBody: editData?.type,
        fuelType: editData?.fuel,
        manufacturingYear: editData?.aging,
        vehicleMake: editData?.onlyMake,
        vehicleModel: editData?.onlyModal,
        vehicleTrim: editData?.trim,
        vehicleEuro: editData?.euro,
        vehicleColour: editData?.color,
        chassisNumber: editData?.chassis,
        enginNumber: editData?.engine,
        registrationState: editData?.vehicleRegistrationState,

        registrationDate: editData?.vehicleRegistrationDate,
        serviceAllotmentDate: editData?.vehicleServiceAllotmentDate,
        insuranceValidityDate: editData?.vehicleInsuranceValidityDate,
        roadTaxValidityData: editData?.vehicleRoadTaxValidityDate,
        pollutionValidity: editData?.vehiclePollutionCheckValidityDate,
        vState: editData?.vehicleServiceState,
        vRegion: editData?.region,
        vDepot: editData?.depot,
        vehicleCategory: editData?.vehicleCategory,
        // vehicleType:"",
        vehicleGroup: editData?.vehicleGroup,
        // openingMeterReading:editData?.,
        // sittingConfiguration:editData?.,
        // seatsSitting:editData?.seating,
        // seatsSemiSleeper:editData?.,
        // seatsSleeper:editData?.,
        vehicleServiceType: editData?.ServiceType,
        fabricator: editData?.fabricator,
        // ownership:editData?.,
        // operator:editData?.,
        inServiceDate: editData?.inServiceDate,
        inServiceOdometer: editData?.inServiceOdometer,
        estimatedSeviceLifeMonths: editData?.estimatedSeviceLifeMonths,
        estimatedSeviceLifeOdometer: editData?.estimatedSeviceLifeOdometer,
        outOfServiceDate: editData?.outOfServiceDate,
        outOfServiceOdometer: editData?.outOfServiceOdometer,
        markOut: editData?.markOut,
        purchaseVendor: editData?.purchaseVendor,
        purchaseDate: editData?.purchaseDate,
        purchasePrice: editData?.purchasePrice,
        purchaseOdometer: editData?.purchaseOdometer,
        purchaseNotes: editData?.purchaseNotes,
        isFinanced: editData?.isFinanced,
        vendor: editData?.vendor,
        dateOfLease: editData?.dateOfLease,
        capitalizedCost: editData?.capitalizedCost,
        downPayment: editData?.downPayment,
        firstPaymentDate: editData?.firstPaymentDate,
        monthlyPayment: editData?.monthlyPayment,
        instalments: editData?.instalments,
        leaseEndDate: editData?.leaseEndDate,
        residualValue: editData?.residualValue,
        contractMileageLimit: editData?.contractMileageLimit,
        excessMileageCharge: editData?.excessMileageCharge,
        leaseNumber: editData?.leaseNumber,
        leaseNotes: editData?.notes,
        LeaseGenerateExpenses: editData?.GenerateExpenses,
        lender: editData?.lender,
        dateOfLoan: editData?.dateOfLoan,
        amountOfLoan: editData?.amountOfLoan,
        rateOfInterest: editData?.rateOfInterest,
        numberOfPayments: editData?.numberOfPayments,
        loanEndDate: editData?.loanEndDate,
        accountNumber: editData?.accountNumber,
        LoanNotes: editData?.LoanNotes,
        generateExpenses: editData?.generateExpenses,
      }));

      console.log("edit id->>", editData?.id);
    }
  }, []);

  console.log("current value--->>", values);
  console.log("addVe---->>>>", addVehiclesInitialValues);
  // console.log("I value--->>", addVehiclesInitialValues);
  return (
    <div className="add-v-main-container">
      <div className="add-v-form-container">
        <div className="add-v-form-top-section ">
          <div className="top-upper-section d-h-between">
            <div>
              <BreadCrumbs
                backNavi={() => navigate("/vehicles")}
                breadCrumbs={[]}
                boldItem={boldItem}
              />
              <div className="heading-600-24 c-blue1 v-center pt-7x">
                New Vehicle
              </div>
            </div>
          </div>
          <div className="top-bottom-section">
            <div className="tabs ">
              {tabs.map((item, index) => (
                <div
                  className={` tab ${
                    isActiveTabs === item.tabName ? "tab-active" : ""
                  }`}
                  key={index}
                  onClick={() => hasActiveTabHandler(item.tabName)}
                >
                  <div
                    className={`v-center ${
                      isActiveTabs === item.tabName ? "activetabIcon" : ""
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div
                    className={` ${
                      isActiveTabs === item.tabName
                        ? "heading-600-16 c-blue2 "
                        : "heading-400-16 c-gray"
                    } v-center`}
                  >
                    {" "}
                    {item.tabName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="add-v-form-bottom-section">
          <div style={detailsCss}>
            <form onSubmit={handleSubmit}>
              {isActiveTabs === "Details" && (
                <VehicleDetails
                  {...{ values, handleChange, handleBlur, errors, touched }}
                />
              )}
              {isActiveTabs === "Specifications" && (
                <Specifications {...{ values, handleChange, handleBlur }} />
              )}
              {isActiveTabs === "Lifecycle" && (
                <LifeCycle
                  {...{ values, setFieldValue, handleChange, handleBlur }}
                />
              )}

              {isActiveTabs === "Financial" && (
                <Financial
                  {...{ values, setFieldValue, handleChange, handleBlur }}
                />
              )}
              {isActiveTabs === "Maintenance" && <Maintenance />}

              {isActiveTabs === "Cost" && <Cost />}

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
        </div>
      </div>
    </div>
  );
};

export default AddVehicles;
