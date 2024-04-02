import { Input } from "@material-tailwind/react";
import CustomInput from "./Atoms/CustomInput";
import CustomSelect from "./Atoms/CustomSelect";
import stateDistrictData from "../assets/states-and-districts.json";
const AddressInfo = ({ touched, errors, values, setFieldValue }) => {
  return (
    <div className="flex p-5">
      <section className="flex justify-start items-start flex-col pr-10 w-1/3">
        <p>2/3</p>
        <p className="text-lg text-blue font-semibold">Address Information</p>
        <p className="text-gray-900 whitespace-nowrap">
          Enter Address Information here
        </p>
      </section>
      <div className="flex flex-col justify-between w-full">
        <CustomInput
          label="Address line 1"
          placeholder="Enter"
          name="driverAddress1"
          required
          containerClass="w-full my-2"
          errors={errors}
        />
        <CustomInput
          label="Address line 2"
          placeholder="Enter"
          name="driverAddress2"
          containerClass="w-full my-2"
          errors={errors}
        />
        <div className="flex justify-between">
          <CustomSelect
            label="State"
            placeholder="Select State"
            name="driverState"
            required
            setFieldValue={setFieldValue}
            options={stateDistrictData.states.map((state) => ({
              label: state.state,
              value: state.state,
            }))}
            errors={errors}
          />
          <CustomSelect
            label="District"
            placeholder="Select District"
            name="driverDistrict"
            required
            options={stateDistrictData?.states
              .find((state) => state?.state === values?.driverState?.value)
              ?.districts.map((district) => ({
                label: district,
                value: district,
              }))}
            setFieldValue={setFieldValue}
            errors={errors}
          />
          <CustomInput
            label="Village"
            placeholder="Enter Village"
            name="driverVillage"
            errors={errors}
          />
        </div>

        <CustomInput
          label="Pincode"
          type="number"
          name="driverPincode"
          placeholder="Enter Pincode"
          required
          errors={errors}
        />
      </div>
    </div>
  );
};

export default AddressInfo;
