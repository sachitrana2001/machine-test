import * as Yup from "yup";
import { password } from "../assets/Icons";

// custom validation
const isRegistrationNumber = (value) => {
  // Regular expression for the format "UP32LM1234"
  const regex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
  return regex.test(value);
};

//  const isChassisNumber=(value)=>{
//     const regex = /^[A-HJ-NPR-Z0-9]{17}$/;
//     return regex.test(value);
//  }

//  adding Registration number method
Yup.addMethod(Yup.string, "isRegistrationNumber", function (message) {
  return this.test("isRegistrationNumber", message, isRegistrationNumber);
});
//   adding chasis number method
// Yup.addMethod(Yup.string, 'isChassisNumber', function(message) {
//     return this.test('isChassisNumber', message, isChassisNumber);
//   });

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(4).required("Please Enter Your Password"),
});
export const abhc = Yup.object({
  password: Yup.string().min(4).required("Please Enter Your Password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const forgetSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
});
export const AddVehiclesSchema = Yup.object({
  registrationNumber: Yup.string().required("Vehicle Number is required"),
  chassisBody: Yup.string(),
  fuelType: Yup.string(),
  manufacturingYear: Yup.string(),
  vehicleMake: Yup.string(),
  vehicleModel: Yup.string(),
  vehicleTrim: Yup.string(),
  vehicleEuro: Yup.string(),
  vehicleColour: Yup.string(),
  chassisNumber: Yup.string()
    .required("Chassis Number is required")
    .length(17, "Chassis number must be 17 characters long"),
  enginNumber: Yup.string().required("Engine Number is required").min(6),
  registrationState: Yup.string(),
  registrationDate: Yup.string(),
  serviceAllotmentDate: Yup.string(),
  insuranceValidityDate: Yup.string(),
  roadTaxValidityData: Yup.string(),
  pollutionValidity: Yup.string(),
  vState: Yup.string(),
  vRegion: Yup.string(),
  vDepot: Yup.string(),
  vehicleCategory: Yup.string(),

  // vehicleType:Yup.string().required('Please Select an Vehicle Type'),
  vehicleGroup: Yup.string(),
  openingMeterReading: Yup.string(),

  sittingConfiguration: Yup.string(),
  seatsSitting: Yup.string(),
  seatsSemiSleeper: Yup.string(),
  seatsSleeper: Yup.string(),

  vehicleServiceType: Yup.string(),

  fabricator: Yup.string(),
  ownership: Yup.string(),
  operator: Yup.string(),

  // Specifications
  dimensionsWidth: Yup.string(),
  dimensionsHeight: Yup.string(),
  dimensionsLength: Yup.string(),
  dimensionsInteriorVolume: Yup.string(),
  dimensionsPassengerVolume: Yup.string(),
  dimensionsCargoVolume: Yup.string(),
  dimensionsGroundClearance: Yup.string(),
  dimensionsBedLength: Yup.string(),
  weightCurbWeight: Yup.string(),
  weightGrossVehicleWeight: Yup.string(),
  performanceTowingCapacity: Yup.string(),
  performanceMaxPayload: Yup.string(),
  fuelMileageCity: Yup.string(),
  fuelMileageHighway: Yup.string(),
  fuelCapacityTank1: Yup.string(),
  fuelCapacityTank2: Yup.string(),
  fuelCngCapacity: Yup.string(),
  fuelBatteryCapacity: Yup.string(),
  oilCapacity: Yup.string(),
  engineSummary: Yup.string(),
  engineBrand: Yup.string(),
  engineCompression: Yup.string(),
  engineCylinders: Yup.string(),
  engineDisplacement: Yup.string(),
  engineFuelInduction: Yup.string(),
  engineMaxHp: Yup.string(),
  engineMaxTorque: Yup.string(),
  engineValves: Yup.string(),
  trnasmisssionType: Yup.string(),
  trnasmisssionGear: Yup.string(),
  trnasmisssionDescription: Yup.string(),
  driveType: Yup.string(),
  brakingSystem: Yup.string(),
  wheelBase: Yup.string(),
  FrontTrackWidth: Yup.string(),
  FrontWheelDiameter: Yup.string(),
  FrontTyreType: Yup.string(),
  FrontTyrePSI: Yup.string(),
  RearTrackWidth: Yup.string(),
  RearWheelDiameter: Yup.string(),
  RearTyreType: Yup.string(),
  RearTyrePSI: Yup.string(),
});
export const lifeCycleSchema = Yup.object({
  textField: Yup.string().required("This field is required"),
});

export const costSchema = Yup.object({
  serviceCostOne: Yup.string().required("Year 1 Estimated Cost is required"),
  serviceCostTwo: Yup.string().required("Year 2 Estimated Cost is required"),
  serviceCostThree: Yup.string().required("Year 3 Estimated Cost is required"),
  serviceCostFour: Yup.string().required("Year 4 Estimated Cost is required"),
  serviceCostFive: Yup.string().required("Year 5 Estimated Cost is required"),
  serviceCostSix: Yup.string().required("Year 6 Estimated Cost is required"),
  serviceCostSeven: Yup.string().required("Year 7 Estimated Cost is required"),
  serviceCostEight: Yup.string().required("Year 8 Estimated Cost is required"),

  fuelCostOne: Yup.string().required("Year 1 Estimated Cost is required"),
  fuelCostTwo: Yup.string().required("Year 2 Estimated Cost is required"),
  fuelCostThree: Yup.string().required("Year 3 Estimated Cost is required"),
  fuelCostFour: Yup.string().required("Year 4 Estimated Cost is required"),
  fuelCostFive: Yup.string().required("Year 5 Estimated Cost is required"),
  fuelCostSix: Yup.string().required("Year 6 Estimated Cost is required"),
  fuelCostSeven: Yup.string().required("Year 7 Estimated Cost is required"),
  fuelCostEight: Yup.string().required("Year 8 Estimated Cost is required"),
});

// Masters
export const vehicleTypeSchema = Yup.object({
  vehicleTypeName: Yup.string(),
  vehicleTypeCode: Yup.string(),
});
export const modelEuroTypeSchema = Yup.object({
  modelEuroTypeName: Yup.string(),
});
