import { Button } from "@material-tailwind/react";
import React from "react";

const FormHeader = ({ isSubmitting }) => {
  return (
    <div className="flex justify-between p-5">
      <p className="text-blue font-semibold text-xl">Driver</p>
      <div>
        {/* <Button
          variant="outlined"
          className="text-gray-500 border broder-gray-500 rounded-none"
          
        >
          Add Multiple Drivers
        </Button> */}
        <Button
          type="submit"
          className="ml-5 bg-[#256EB5] rounded-none text-[12px]"
          loading={isSubmitting}
        >
          Save Driver
        </Button>
      </div>
    </div>
  );
};

export default FormHeader;
