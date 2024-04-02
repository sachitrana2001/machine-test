import * as Yup from "yup";

export const driverSchema = Yup.object().shape({
  driverName: Yup.string().required("Driver name is Required"),
  mobile: Yup.string()
    .required("Required")
    .matches(/^[0-9]{10}$/, "Invalid mobile number"), // Validate 10-digit mobile number
  driverFatherName: Yup.string().required("Father's Name is Required"),
  driverAddress1: Yup.string().required("Required"),
  driverState: Yup.object().required("State is Required"),
  driverDistrict: Yup.object().required("District is Required"),
  driverPincode: Yup.string()
    .required("Required")
    .matches(/^[0-9]{6}$/, "Invalid pincode"), // Validate 6-digit pincode
  driverDOB: Yup.string().required("DOB is Required"),
  driverDrivingLicenceNumber: Yup.string().required("Required"),
  driverLicenceValidity: Yup.string().required("Required"),
  driverContractStartDate: Yup.string().required("Required"),
  driverContractEndDate: Yup.string().required("Required"),
  driverAadharnumber: Yup.string()
    .required("Required")
    .matches(/^[0-9]{12}$/, "Invalid Aadhaar number"), // Validate 12-digit Aadhaar number
  driverPayrolID: Yup.string()
    .required("Required")
    .matches(/^[0-9]{6}$/, "Invalid payroll ID"), // Validate 6-digit payroll ID
  driverDepot: Yup.object().required("Depot is Required"),
  driverRegion: Yup.object().required("Region is Required"),
});
