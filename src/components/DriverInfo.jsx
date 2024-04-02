import CustomInput from "./Atoms/CustomInput";
import CustomSelect from "./Atoms/CustomSelect";
import CustomDatePicker from "./Atoms/CustomDatePicker";

const DriverInfo = ({ touched, errors, values, setFieldValue }) => {
  return (
    <div className="flex p-5">
      <section className="flex justify-start items-start flex-col pr-10 w-1/3">
        <p>3/3</p>
        <p className="text-lg text-blue font-semibold">Driver Information</p>
        <p className="text-gray-900 whitespace-nowrap">
          Enter Driver Information here
        </p>
      </section>
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <CustomDatePicker
            label="Date of Birth"
            placeholder="Enter"
            name="driverDOB"
            setFieldValue={setFieldValue}
            values={values}
            errors={errors}
          />
          <CustomInput
            name="driverDrivingLicenceNumber"
            label="Driving Licence Number"
            placeholder="Enter Driving Licence Number"
            required
            errors={errors}
          />
          <CustomSelect
            label="Blood Group"
            placeholder="Select Blood Group"
            name="driverBloodGroup"
            options={[
              { label: "O+", value: 1 },
              { label: "O-", value: 2 },
              { label: "A+", value: 3 },
              { label: "A-", value: 4 },
              { label: "B+", value: 5 },
              { label: "B-", value: 6 },
              { label: "AB+", value: 7 },
            ]}
            setFieldValue={setFieldValue}
            errors={errors}
          />
        </div>
        <div className="flex justify-between w-full">
          <CustomDatePicker
            name="driverLicenceValidity"
            label="Licence Validity"
            placeholder="Enter"
            setFieldValue={setFieldValue}
            values={values}
            errors={errors}
          />
          <CustomInput
            name="driverDrivingLicenseLocation"
            label="Location of Issuance of Driving License"
            placeholder="Enter City Name"
            required
            values={values}
            errors={errors}
          />
          <CustomSelect
            name="driverLicenceType"
            label="Licence Type"
            placeholder="Select Licence Type"
            options={[
              { label: "Licence Type 1", value: 1 },
              { label: "Licence Type 2", value: 2 },
              { label: "Licence Type 3", value: 3 },
            ]}
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
          />
        </div>
        <div className="flex justify-between w-full">
          <CustomDatePicker
            name="driverContractStartDate"
            label="Contract Start Date"
            placeholder="Enter"
            setFieldValue={setFieldValue}
            values={values}
            errors={errors}
          />
          <CustomDatePicker
            name="driverContractEndDate"
            label="Contract End Date"
            placeholder="Enter"
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
          />
          <CustomSelect
            name="driverType"
            label="Driver Type"
            placeholder="Select Driver Type"
            options={[
              { label: "Driver Type 1", value: 1 },
              { label: "Driver Type 2", value: 2 },
              { label: "Driver Type 3", value: 3 },
            ]}
            setFieldValue={setFieldValue}
            errors={errors}
          />
        </div>
        <div className="flex justify-between w-full">
          <CustomInput
            name="driverAadharnumber"
            label="Aadhar number"
            placeholder="Enter Aadhar number"
            required
            errors={errors}
          />
          <CustomInput
            name="driverPayrolID"
            label="Payrol ID"
            placeholder="Enter City Name"
            required
            errors={errors}
          />
          <CustomDatePicker
            label="Life Insurance validity"
            placeholder="Enter"
            name="driverLifeInsuranceValidity"
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
          />
        </div>
        <div className="flex justify-start w-full gap-12">
          <CustomSelect
            name="driverDepot"
            label="Region"
            placeholder="Select Region"
            options={[
              { label: "Region 1", value: 1 },
              { label: "Region 2", value: 2 },
              { label: "Region 3", value: 3 },
            ]}
            setFieldValue={setFieldValue}
            errors={errors}
          />
          <CustomSelect
            name="driverRegion"
            label="Depot"
            placeholder="Select Depot"
            options={[
              { label: "Depot 1", value: 1 },
              { label: "Depot 2", value: 2 },
              { label: "Depot 3", value: 3 },
            ]}
            setFieldValue={setFieldValue}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default DriverInfo;
