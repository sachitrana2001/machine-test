import React from "react";
import BasicInfo from "./BasicInfo";
import { Card } from "@material-tailwind/react";
import FormHeader from "./FormHeader";
import AddressInfo from "./AddressInfo";
import DriverInfo from "./DriverInfo";
import { Form, Formik } from "formik";
import { APIS, initialValues } from "../constants";
import { driverSchema } from "../validations";
import { toast } from "react-toastify";
import { postApi } from "../utils";

const FormContainer = () => {
  const onSubmit = (values, { setSubmitting }) => {
    const payload = { ...values };
    payload.driverState = values.driverState.value;
    payload.driverDistrict = values.driverDistrict.value;
    payload.driverBloodGroup = values.driverBloodGroup.value;
    payload.driverLicenceType = values.driverLicenceType.value;
    payload.driverType = values.driverType.value;
    payload.driverDepot = values.driverDepot.value;
    payload.driverRegion=  values.driverRegion.value;
    console.log("Driver data==>", payload);
    setSubmitting(false)
    // postApi(APIS.ADD_DRIVER, payload)
    //   .then(() => {
    //     toast.success("Driver saved", {
    //       position: "top-center",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   })
    //   .finally(() => setSubmitting(false));
  };
  return (
    <Card className="h-full  p-4 bg-white shadow-xl mx-10 ">
      <Formik
        initialValues={initialValues}
        validationSchema={driverSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ errors, touched, values, isSubmitting, setFieldValue }) => (
          <Form>
            <FormHeader isSubmitting={isSubmitting} />
            <BasicInfo {...{ touched, errors, values, setFieldValue }} />
            <AddressInfo {...{ touched, errors, values, setFieldValue }} />
            <DriverInfo {...{ touched, errors, values, setFieldValue }} />
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default FormContainer;
