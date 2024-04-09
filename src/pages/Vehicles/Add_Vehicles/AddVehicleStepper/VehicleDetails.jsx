import React, { useState, useEffect } from "react";
import InputField from "@/SubComponent/InputField";
import DocumentUploder from "../../../../components/common/documentUploder";
import {
  indianStates,
  regionData,
  depotOptions,
  sittingConfiguration1,
} from "../constant";
import useGetAllVehicleChassisTypes from "@/Apis/useGetAllVehicleChassisTypes";
const getAllChassisTypeUrl =
  "https://erp.sugamyatra.up.in/api/vehicleChassisTypes/getall";
const getAllFuleTypeUrl =
  "https://erp.sugamyatra.up.in/api/vehicleFuelTypes/getall";
const getAllvehicleMakesUrl =
  "https://erp.sugamyatra.up.in/api/vehicleMakes/getall";
const getAllvehicleModelsUrl =
  "https://erp.sugamyatra.up.in/api/vehicleModels/getall";
const getAllvehicleTrimsUrl =
  "https://erp.sugamyatra.up.in/api/vehicleTrims/getall";
const getAllvehicleGroupsUrl =
  "https://erp.sugamyatra.up.in/api/vehicleGroups/getall";
const getAllvehicleServiceTypesUrl =
  "https://erp.sugamyatra.up.in/api/vehicleServiceTypes/getall";
const getAllDepotTypeUrl = "https://erp.sugamyatra.up.in/api/depot/getall";
const getAllvehiclecolorUrl =
  "https://erp.sugamyatra.up.in/api/vehiclecolor/getall";
const getAllregionTypeUrl = "https://erp.sugamyatra.up.in/api/region/getall";
const getToken = localStorage.getItem("userToken");

const VehicleDetails = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  const [getAllDropdownValue, setGetAllDropdownValue] = useState({
    chassisBodyType: [{ id: "", option: "" }],
    fuelType: [{ id: "", option: "" }],
    vehicleMakesType: [{ id: "", option: "" }],
    vehicleModelsType: [{ id: "", option: "" }],
    vehicleTrimsType: [{ id: "", option: "" }],
    vehicleGroups: [{ id: "", option: "" }],
    vehicleServiceTypes: [{ id: "", option: "" }],
    depotType: [{ id: "", option: "" }],
    vehiclecolorType: [{ id: "", option: "" }],
    regionType: [{ id: "", option: "" }],
  });

  const methodGet = "get";
  const { data, loading, error } = useGetAllVehicleChassisTypes(
    getAllChassisTypeUrl,
    getToken
  );
  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = useGetAllVehicleChassisTypes(getAllFuleTypeUrl, getToken);
  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useGetAllVehicleChassisTypes(getAllvehicleMakesUrl, getToken);
  const {
    data: data3,
    loading: loading3,
    error: error3,
  } = useGetAllVehicleChassisTypes(getAllvehicleModelsUrl, getToken);
  const {
    data: data4,
    loading: loading4,
    error: error4,
  } = useGetAllVehicleChassisTypes(getAllvehicleTrimsUrl, getToken);
  const {
    data: data5,
    loading: loading5,
    error: error5,
  } = useGetAllVehicleChassisTypes(getAllvehicleGroupsUrl, getToken);
  const {
    data: data6,
    loading: loading6,
    error: error6,
  } = useGetAllVehicleChassisTypes(getAllvehicleServiceTypesUrl, getToken);
  const {
    data: data7,
    loading: loading7,
    error: error7,
  } = useGetAllVehicleChassisTypes(getAllDepotTypeUrl, getToken, methodGet);
  const {
    data: data8,
    loading: loading8,
    error: error8,
  } = useGetAllVehicleChassisTypes(getAllvehiclecolorUrl, getToken, methodGet);
  const {
    data: data9,
    loading: loading9,
    error: error9,
  } = useGetAllVehicleChassisTypes(getAllregionTypeUrl, getToken, methodGet);

  const formData = [
    {
      left: {
        title: "Identification",
        para: "Enter identification details here",
      },
      right: [
        // {block_type:"field-type-one",input_type:"textField",labelName:"Vehicle Name",placeholder:"Enter Vehicle Name"},
        {
          block_type: "field-type-two",
          name: "registrationNumber",
          input_type: "text",
          labelName: "Vehicle Registration Number / License Plate",
          bottomlabel:
            "Vehicle Registration Number as per the Registration Certificate",
          placeholder:
            "Enter Registration Number / License Plate (UP32 PF 2345)",
          btn_name: "Check by VAHAN",
          btn_fun: "waiting..",
          required: true,
        },
        {
          block_type: "group-type1-70",
          name: "registrationNumber",
          input_type: "text",
          labelName: "Vehicle Name",
          placeholder: "Vehicle Name",
          readOnly1: true,
        },

        {
          block_type: "field-type-five",
          name1: "chassisBody",
          bottomlabel: "eg. Conventional, Full Size, etc.",
          input_type1: "select",
          labelName1: "Chassis / Body Type",
          isDropDown1: getAllDropdownValue.chassisBodyType,
          placeholder1: "Select Chassis/Body Type",
          name2: "fuelType",
          input_type2: "select",
          labelName2: "Fuel Type",
          isDropDown2: getAllDropdownValue.fuelType,
          placeholder2: "Select Fuel Type",
        },
        {
          block_type: "field-type-four",
          name1: "manufacturingYear",
          input_type1: "select",
          labelName1: "Manufacturing Year",
          isDropDown1: [
            { option: "1990" },
            { option: "1991" },
            { option: "1992" },
            { option: "1993" },
            { option: "1994" },
            { option: "1995" },
            { option: "1996" },
            { option: "1997" },
            { option: "1998" },
            { option: "1999" },
            { option: "2000" },
            { option: "2001" },
            { option: "2002" },
            { option: "2003" },
            { option: "2004" },
            { option: "2005" },
            { option: "2006" },
            { option: "2007" },
            { option: "2008" },
            { option: "2009" },
            { option: "2010" },
            { option: "2011" },
            { option: "2012" },
            { option: "2013" },
            { option: "2014" },
            { option: "2015" },
            { option: "2016" },
            { option: "2017" },
            { option: "2018" },
            { option: "2019" },
            { option: "2020" },
            { option: "2021" },
            { option: "2022" },
            { option: "2023" },
            { option: "2024" },
          ],
          placeholder1: "YYYY",
          name2: "vehicleMake",
          input_type2: "select",
          bottomlabel2: "eg. Tata, Ashok Leyland, etc.",
          labelName2: "Make",
          isDropDown2: getAllDropdownValue.vehicleMakesType,
          placeholder2: "Select Make",
          name3: "vehicleModel",
          bottomlabel3: "eg. Viking Diesel, Viking CNG. etc.",
          input_type3: "select",
          labelName3: "Model",
          isDropDown3: getAllDropdownValue.vehicleModelsType,
          placeholder3: "Select Model",
        },
        {
          block_type: "field-type-four",
          name1: "vehicleTrim",
          input_type1: "select",
          labelName1: "Trim",
          bottomlabel1: "eg. SE, LE, XLE, etc.",
          isDropDown1: getAllDropdownValue.vehicleTrimsType,
          placeholder1: "Select Trim",
          name2: "vehicleEuro",
          input_type2: "select",
          labelName2: "Model Euro",
          isDropDown2: [
            { option: "Euro2" },
            { option: "Euro3" },
            { option: "Euro4" },
          ],
          placeholder2: "Select Model Euro",
          name3: "vehicleColour",
          input_type3: "select",
          labelName3: "Vehicle Colour",
          isDropDown3: getAllDropdownValue.vehiclecolorType,
          placeholder3: "Select Vehicle Colour",
        },
        {
          block_type: "field-type-six",
          name1: "chassisNumber",
          input_type1: "text",
          labelName1: "Chassis Number / VIN",
          placeholder1: "Enter Chassis Number / VIN",
          required1: true,
          name2: "enginNumber",
          input_type2: "text",
          labelName2: "Engine Number",
          placeholder2: "Enter Engine Number",
          required2: true,
        },
        // {block_type:"field-type-five",input_type1:"selectedOption",labelName1:"Registration State",isDropDown1:indianStates,placeholder1:"Select Registration State",input_type2:"date",labelName2:"Registration (Date)",placeholder2:"DD-MM-YYYY"},
      ],
    },
    {
      left: { title: "Service Details", para: "Enter service details here" },
      right: [
        {
          block_type: "field-type-four",
          name1: "registrationState",
          input_type1: "select",
          isDropDown1: indianStates,
          labelName1: "Registration State ",
          placeholder1: "Select Registration State",
          name2: "registrationDate",
          input_type2: "date",
          labelName2: "Registration (Date)",
          placeholder2: "DD-MM-YYYY",
          name3: "serviceAllotmentDate",
          input_type3: "date",
          labelName3: "Service Allotment (Date)",
          placeholder3: "DD-MM-YYYY",
        },
        {
          block_type: "field-type-four",
          name1: "insuranceValidityDate",
          input_type1: "date",
          labelName1: "Insurance Validity (Date)",
          placeholder1: "DD-MM-YYYY",
          name2: "roadTaxValidityData",
          input_type2: "date",
          labelName2: "Road Tax Validity (Date)",
          placeholder2: "DD-MM-YYYY",
          name3: "pollutionValidity",
          input_type3: "date",
          labelName3: "Pollution Validity (Date)",
          placeholder3: "DD-MM-YYYY",
        },
        {
          block_type: "field-type-four",
          name1: "vState",
          input_type1: "select",
          isDropDown1: indianStates,
          labelName1: "State ",
          placeholder1: "Select State",
          name2: "vRegion",
          input_type2: "select",
          isDropDown2: getAllDropdownValue.regionType,
          labelName2: "Region",
          placeholder2: "Select Region",
          name3: "vDepot",
          input_type3: "select",
          isDropDown3: getAllDropdownValue.depotType,
          labelName3: "Depot",
          placeholder3: "Select Depot",
        },
        {
          block_type: "field-type-four",
          name1: "vehicleCategory",
          input_type1: "select",
          isDropDown1: [{ option: "Ordinary" }, { option: "Air Conditioned" }],
          labelName1: "Vehicle Category ",
          placeholder1: "Select Vehicle Category",
          name2: "vehicleGroup",
          input_type2: "select",
          isDropDown2: getAllDropdownValue.vehicleGroups,
          labelName2: "Vehicle Group",
          placeholder2: "Select Vehicle Group",
          name3: "openingMeterReading",
          input_type3: "number",
          labelName3: "Odometer Reading",
          placeholder3: "Enter Odometer Reading Depot",
        },
        {
          block_type: "field-type-eleven",
          name1: "sittingConfiguration",
          input_type1: "select",
          isDropDown1: sittingConfiguration1,
          labelName1: "Sitting Configuration",
          placeholder1: "Select Sitting Configuration",
          name2: "seatsSitting",
          input_type2: "number",
          labelName2: "Seats (Sitting)",
          placeholder2: "Enter",
          name3: "seatsSemiSleeper",
          input_type3: "number",
          labelName3: "Seats (Semi Sleeper)",
          placeholder3: "Enter",
          name4: "seatsSleeper",
          input_type4: "number",
          labelName4: "Seats (Sleeper)",
          placeholder4: "Enter",
        },
        {
          block_type: "field-type-nine",
          name1: "vehicleServiceType",
          input_type1: "select",
          labelName1: "Vehicle Service Type",
          placeholder1: "Select Bus Service Type",
          isDropDown1: [
            { option: "Lohia Gramin Sewa" },
            { option: "Ordinary Service" },
            { option: "Janrath Services" },
            { option: "Suhani Sewa" },
            { option: "Sankalp Sewa" },
            { option: "AC Sleeper Service" },
            { option: "Scania Service" },
            { option: "Shatabdi Service" },
            { option: "Volvo Service" },
          ],
        },
        // {block_type:"field-type-six",input_type1:"selectedOption",isDropDown1:[{option:"option1"},{option:"option2"}],labelName1:"Bus Service Type",placeholder1:"Select Bus Service Type",input_type2:"date",labelName2:"Service Allotment (Date)",placeholder2:"Select Date"},
        // {block_type:"field-type-six",input_type1:"date",labelName1:"Insurance Validity (Date)",placeholder1:"Select Insurance Validity (Date)",input_type2:"date",labelName2:"Road Tax Validity (Date)",placeholder2:"Select Road Tax Validity (Date)"},
        // {block_type:"field-type-seven",input_type1:"textField",labelName1:"Pollution Check Validity (Date)",placeholder1:"Select Pollution Check Validity (Date)"},
      ],
    },
    {
      left: {
        title: "Additional Detail",
        para: "Enter additional details here",
      },
      right: [
        {
          block_type: "field-type-one",
          name: "fabricator",
          input_type: "select",
          labelName: "Fabricator",
          placeholder: "Select Vehicle Fabricator",
          isDropDown1: [
            { option: "C.W.SHOP" },
            { option: "DR.RML" },
            { option: "BMMS JAIPUR" },
            { option: "R.M.L." },
          ],
        },
        {
          block_type: "field-type-eleven",
          name1: "ownership",
          input_type1: "select",
          isDropDown1: [{ option: "Hired/UT" }, { option: "Owned/Nigam" }],
          labelName1: "Ownership",
          placeholder1: "Select Vehicle Ownership",
          name2: "operator",
          input_type2: "select",
          isDropDown2: [{ option: "option1" }, { option: "option2" }],
          labelName2: "Operator",
          placeholder2: "Select Vehicle Operator",
        },
        {
          block_type: "image-uploder-block",
          title: "Upload Multiple Vehicle Images",
          message: "or drag & drop vehicle image files here",
          btnText: "BROWSE FILE",
          bottomMessage: "Supported File Format: jpeg, png (upto 1 MB)",
        },
      ],
    },
  ];
  useEffect(() => {
    if (data) {
      const newChassisBody = data.data.map((chassis, index) => ({
        id: chassis?._id,
        option: chassis?.chassisType,
      }));
      // console.log("newChassisBody-->>",newChassisBody);
      setGetAllDropdownValue((prev) => ({
        ...prev,
        chassisBodyType: newChassisBody,
      }));
    }
    if (data1) {
      const vehicleFuelTypeName = data1.data.map((fule, index) => ({
        id: fule?._id,
        option: fule?.vehicleFuelTypeName,
      }));
      // console.log("vehicleFuelTypeName-->>",vehicleFuelTypeName);
      setGetAllDropdownValue((prev) => ({
        ...prev,
        fuelType: vehicleFuelTypeName,
      }));
    }
    if (data2) {
      const makeName = data2.data.map((fule, index) => ({
        id: fule?._id,
        option: fule?.makeName,
      }));
      // console.log("makeName-->>",makeName);
      setGetAllDropdownValue((prev) => ({
        ...prev,
        vehicleMakesType: makeName,
      }));
    }
    if (data3) {
      const modelName = data3.data.map((fule, index) => ({
        id: fule?._id,
        option: fule?.modelName,
      }));
      // console.log("modelName-->>",modelName);
      setGetAllDropdownValue((prev) => ({
        ...prev,
        vehicleModelsType: modelName,
      }));
    }
    if (data4) {
      const vehicleTrimName = data4.data.map((fule, index) => ({
        id: fule?._id,
        option: fule?.vehicleTrimName,
      }));
      // console.log("newChassisBody-->>",vehicleTrimName);
      setGetAllDropdownValue((prev) => ({
        ...prev,
        vehicleTrimsType: vehicleTrimName,
      }));
    }
    if (data5) {
      const vehicleGroupName = data5.data.map((fule, index) => ({
        id: fule?._id,
        option: fule?.vehicleGroupName,
      }));
      // console.log("vehicleGroupName-->>",vehicleGroupName);
      setGetAllDropdownValue((prev) => ({
        ...prev,
        vehicleGroups: vehicleGroupName,
      }));
    }
    if (data6) {
      const newFuleType = data6.data.map((fule, index) => ({
        id: fule?._id,
        option: fule?.vehicleFuelTypeName,
      }));
      // console.log("newChassisBody-->>",newFuleType);
      setGetAllDropdownValue((prev) => ({
        ...prev,
        vehicleServiceTypes: newFuleType,
      }));
    }
    if (data7) {
      const depotName = data7.data.map((item, index) => ({
        id: item?._id,
        option: item?.depotName,
      }));
      // console.log("newChassisBody-->>",newFuleType);
      setGetAllDropdownValue((prev) => ({ ...prev, depotType: depotName }));
    }
    if (data8) {
      const vehicleColourName = data8.data.map((item, index) => ({
        id: item?._id,
        option: item?.vehicleColourName,
      }));
      // console.log("newChassisBody-->>",newFuleType);
      setGetAllDropdownValue((prev) => ({
        ...prev,
        vehiclecolorType: vehicleColourName,
      }));
    }
    if (data9) {
      const regionName = data9.data.map((item, index) => ({
        id: item?._id,
        option: item?.regionName,
      }));
      // console.log("newChassisBody-->>",newFuleType);
      setGetAllDropdownValue((prev) => ({ ...prev, regionType: regionName }));
    }
  }, [data, data1, data2, data3, data4, data5, data7, data8, data9]);
  console.log("chech error--->>>", data7);
  return (
    <>
      {formData.map((items, index) => (
        <div className={`add-v-form ${index > 0 ? "pt-43" : ""}`}>
          <div className="add-v-form-left-section">
            <div className="heading-600-16 c-blue1">{items.left.title}</div>
            <div className="heading-400-12 c-gray2">{items.left.para}</div>
          </div>
          <div className="add-v-form-right-section">
            <div className="add-v-form-section">
              {items.right.map((fields, index) => (
                <>
                  <div className={fields.block_type} key={fields.name}>
                    {fields.block_type === "field-type-one" && (
                      <>
                        <InputField
                          key={`${index}{fields.name}`}
                          labelName={fields.labelName}
                          placeholder={fields.placeholder}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type}
                          name={fields.name}
                          value={values?.[fields.name]}
                          isDropDown={fields.isDropDown1}
                        />
                        {errors[fields.name] && touched[fields.name] && (
                          <div className="error-message">
                            {errors[fields.name]}
                          </div>
                        )}
                      </>
                    )}
                    {fields.block_type === "group-type1-70" && (
                      <>
                        <div className="pr-11">
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName}
                            placeholder={fields.placeholder}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type}
                            name={fields.name}
                            value={values?.[fields.name]}
                            bottomlabel={fields.bottomlabel}
                            readOnly={fields.readOnly1}
                          />
                        </div>
                      </>
                    )}
                    {fields.block_type === "field-type-two" && (
                      <>
                        <div className="group-type1-70">
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName}
                            placeholder={fields.placeholder}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type}
                            name={fields.name}
                            value={values?.[fields.name]}
                            bottomlabel={fields.bottomlabel}
                            isRequired={fields.required}
                          />
                          {errors[fields.name] && touched[fields.name] && (
                            <div className="error-message">
                              {errors[fields.name]}
                            </div>
                          )}
                        </div>
                        <button className="blue-button-56 check-vahan heading-600-14">
                          {fields.btn_name}
                        </button>
                      </>
                    )}

                    {fields.block_type === "field-type-three" && (
                      <>
                        <div>
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName1}
                            placeholder={fields.placeholder1}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type1}
                            name={fields.name1}
                            value={values?.[fields.name1]}
                            isDropDown={fields.isDropDown1}
                          />
                          {errors[fields.name1] && touched[fields.name1] && (
                            <div className="error-message">
                              {errors[fields.name1]}
                            </div>
                          )}
                        </div>
                        <InputField
                          key={`${index}{fields.name}`}
                          labelName={fields.labelName2}
                          placeholder={fields.placeholder2}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type2}
                          name={fields.name2}
                          value={values?.[fields.name2]}
                          isDropDown={fields.isDropDown2}
                        />
                        <div className="field-type-three-right-section">
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName3}
                            placeholder={fields.placeholder3}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type3}
                            name={fields.name3}
                            value={values?.[fields.name3]}
                          />
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName4}
                            placeholder={fields.placeholder4}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type4}
                            name={fields.name4}
                            value={values?.[fields.name4]}
                          />
                        </div>
                      </>
                    )}

                    {fields.block_type === "field-type-four" && (
                      <>
                        <div className="w-100">
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName1}
                            placeholder={fields.placeholder1}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type1}
                            name={fields.name1}
                            value={values?.[fields.name1]}
                            isDropDown={fields.isDropDown1}
                            bottomlabel={fields.bottomlabel1}
                          />
                          {errors[fields.name1] && touched[fields.name1] && (
                            <div className="error-message">
                              {errors[fields.name1]}
                            </div>
                          )}
                        </div>
                        <div>
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName2}
                            placeholder={fields.placeholder2}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type2}
                            name={fields.name2}
                            value={values?.[fields.name2]}
                            isDropDown={fields.isDropDown2}
                            bottomlabel={fields.bottomlabel2}
                          />
                          {errors[fields.name2] && touched[fields.name2] && (
                            <div className="error-message">
                              {errors[fields.name2]}
                            </div>
                          )}
                        </div>
                        <div>
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName3}
                            placeholder={fields.placeholder3}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type3}
                            name={fields.name3}
                            value={values?.[fields.name3]}
                            isDropDown={fields.isDropDown3}
                            bottomlabel={fields.bottomlabel3}
                          />
                          {errors[fields.name3] && touched[fields.name3] && (
                            <div className="error-message">
                              {errors[fields.name3]}
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    {fields.block_type === "field-type-five" && (
                      <>
                        <div className="w-100">
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName1}
                            placeholder={fields.placeholder1}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type1}
                            name={fields.name1}
                            value={values?.[fields.name1]}
                            isDropDown={fields.isDropDown1}
                            bottomlabel={fields.bottomlabel}
                          />
                          {errors[fields.name1] && touched[fields.name1] && (
                            <div className="error-message">
                              {errors[fields.name1]}
                            </div>
                          )}
                        </div>
                        <div className="w-100">
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName2}
                            placeholder={fields.placeholder2}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type2}
                            name={fields.name2}
                            value={values?.[fields.name1]}
                            isDropDown={fields.isDropDown2}
                          />
                          {errors[fields.name2] && touched[fields.name2] && (
                            <div className="error-message">
                              {errors[fields.name2]}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                    {fields.block_type === "field-type-six" && (
                      <>
                        <div className="w-100">
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName1}
                            placeholder={fields.placeholder1}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type1}
                            name={fields.name1}
                            value={values?.[fields.name1]}
                            isDropDown={fields.isDropDown1}
                            isRequired={fields.required1}
                          />
                          {errors[fields.name1] && touched[fields.name1] && (
                            <div className="error-message">
                              {errors[fields.name1]}
                            </div>
                          )}
                        </div>
                        <div className="w-100">
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName2}
                            placeholder={fields.placeholder2}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type2}
                            name={fields.name2}
                            value={values?.[fields.name2]}
                            isRequired={fields.required2}
                          />
                          {errors[fields.name2] && touched[fields.name2] && (
                            <div className="error-message">
                              {errors[fields.name2]}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                    {fields.block_type === "field-type-seven" && (
                      <>
                        <InputField
                          key={`${index}{fields.name}`}
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values?.[fields.name1]}
                        />
                        {errors[fields.name1] && touched[fields.name1] && (
                          <div className="error-message">
                            {errors[fields.name1]}
                          </div>
                        )}
                      </>
                    )}

                    {fields.block_type === "field-type-eight" && (
                      <>
                        <InputField
                          key={`${index}{fields.name}`}
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values[fields.name1]}
                          isDropDown={fields.isDropDown1}
                        />
                        <InputField
                          key={`${index}{fields.name}`}
                          labelName={fields.labelName2}
                          placeholder={fields.placeholder2}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type2}
                          name={fields.name2}
                          value={values[fields.name2]}
                          isDropDown={fields.isDropDown2}
                        />
                        <InputField
                          key={`${index}{fields.name}`}
                          labelName={fields.labelName3}
                          placeholder={fields.placeholder3}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type3}
                          name={fields.name3}
                          value={values[fields.name3]}
                          isDropDown={fields.isDropDown3}
                        />
                      </>
                    )}

                    {fields.block_type === "field-type-nine" && (
                      <div className="w-100">
                        <InputField
                          key={`${index}{fields.name}`}
                          labelName={fields.labelName1}
                          placeholder={fields.placeholder1}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type={fields.input_type1}
                          name={fields.name1}
                          value={values[fields.name1]}
                          isDropDown={fields.isDropDown1}
                        />
                        {errors[fields.name1] && touched[fields.name1] && (
                          <div className="error-message">
                            {errors[fields.name1]}
                          </div>
                        )}
                      </div>
                    )}
                    {fields.block_type === "field-type-eleven" && (
                      <>
                        <div className="eleven-left">
                          <InputField
                            key={`${index}{fields.name}`}
                            labelName={fields.labelName1}
                            placeholder={fields.placeholder1}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type={fields.input_type1}
                            name={fields.name1}
                            value={values?.[fields?.name1]}
                            isDropDown={fields.isDropDown1}
                          />
                          {errors[fields.name1] && touched[fields.name1] && (
                            <div className="error-message">
                              {errors[fields.name1]}
                            </div>
                          )}
                        </div>
                        <div className="eleven-right">
                          <div className="flex-1">
                            <InputField
                              key={`${index}{fields.name}`}
                              labelName={fields.labelName2}
                              placeholder={fields.placeholder2}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              type={fields.input_type2}
                              name={fields.name2}
                              value={values?.[fields?.name2]}
                              isDropDown={fields.isDropDown2}
                            />
                            {errors[fields.name2] && touched[fields.name2] && (
                              <div className="error-message">
                                {errors[fields.name2]}
                              </div>
                            )}
                          </div>
                          {fields.labelName3 && (
                            <div className="flex-1">
                              <InputField
                                key={`${index}{fields.name}`}
                                labelName={fields.labelName3}
                                placeholder={fields.placeholder3}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type={fields.input_type3}
                                name={fields.name3}
                                value={values?.[fields?.name3]}
                                isDropDown={fields.isDropDown3}
                              />
                              {errors[fields.name3] &&
                                touched[fields.name3] && (
                                  <div className="error-message">
                                    {errors[fields.name3]}
                                  </div>
                                )}
                            </div>
                          )}

                          {fields.labelName4 && (
                            <div className="flex-1">
                              <InputField
                                key={`${index}{fields.name}`}
                                labelName={fields.labelName4}
                                placeholder={fields.placeholder4}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type={fields.input_type4}
                                name={fields.name4}
                                value={values?.[fields.name4]}
                                isDropDown={fields.isDropDown4}
                              />
                              {errors[fields.name4] &&
                                touched[fields.name4] && (
                                  <div className="error-message">
                                    {errors[fields.name4]}
                                  </div>
                                )}
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    {fields.block_type === "image-uploder-block" && (
                      <DocumentUploder
                        title={fields.title}
                        message={fields.message}
                        btnText={fields.btnText}
                        bottomMessage={fields.bottomMessage}
                      />
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default VehicleDetails;
