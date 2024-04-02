import { Input } from "@material-tailwind/react";
import CustomInput from "./Atoms/CustomInput";

const BasicInfo = ({ touched, errors, values, setFieldValue }) => {
  return (
    <div className="flex p-5">
      <section className="flex justify-between items-start flex-col pr-10 w-1/3">
        <p>1/3</p>
        <p className="text-lg text-blue font-semibold">Basic Information</p>
        <p className="text-gray-900 whitespace-nowrap">
          Enter Basic Information here
        </p>
      </section>
      <div className="flex justify-between w-full">
        <CustomInput
          label="Name"
          placeholder="Enter Name"
          name="driverName"
          errors={errors}
          required
        />
        <CustomInput
          label="Father's Name"
          placeholder="Enter Father's Name"
          name="driverFatherName"
          required
          errors={errors}
        />
        <CustomInput
          label="Mobile No."
          type="number"
          placeholder="Enter mobile no. here"
          name="mobile"
          required
          errors={errors}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
