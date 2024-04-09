import TextDetailsOne from "@/components/common/textDetails";
import React from "react";
import "./Specifications.css";
const Specifications = ({ data }) => {
  const title1 = "Dimensions";
  const title2 = "Weight";
  const title3 = "Performance";
  const title4 = "Fuel";
  const title5 = "Oil";
  const title6 = "Engine";
  const title7 = "Transmission";
  const title8 = "Wheels & Tires";

  console.log("Specifications data->>>", data);
  const details1 = [
    { title: "Width", name: `${data?.dimensionsWidth}mm` },
    { title: "Height", name: `${data?.dimensionsHeight}mm` },
    { title: "Length", name: `${data?.dimensionsLength}mm` },
    { title: "Interior Volumne", name: `${data?.dimensionsInteriorVolume}mm` },
    {
      title: "Passenger Volumne",
      name: `${data?.dimensionsPassengerVolume}mm`,
    },
    { title: "Cargo Volume", name: `${data?.dimensionsCargoVolume}mm` },
    { title: "Ground Clearance", name: `${data?.dimensionsGroundClearance}` },
    { title: "Bed Length", name: `${data?.dimensionsBedLength}` },
  ];
  const details2 = [
    { title: "Curb Weight", name: `${data?.weightCurbWeight}kg` },
    {
      title: "Gross Vehicle Weight Rating",
      name: `${data?.weightGrossVehicleWeight}kg`,
    },
  ];
  const details3 = [
    { title: "Towing Capacity", name: `${data?.performanceTowingCapacity}kg` },
    { title: "Max Payload", name: `${data?.performanceMaxPayload}kg` },
  ];
  const details4 = [
    { title: "Milage(City)", name: "1" },
    { title: "Milage(Higway)", name: "---" },
    { title: "Capacity Tank 1", name: `${data?.fuelCapacityTank1}` },
    { title: "Capacity Tank 2", name: `${data?.fuelCapacityTank2}` },
    { title: "CNG Capacity", name: `${data?.fuelCngCapacity}` },
    { title: "Battery Capacity", name: `${data?.fuelBatteryCapacity}` },
  ];
  const details5 = [
    {
      title: "Oil Capacity",
      name: `${data?.oilCapacity}`,
    },
  ];
  const details6 = [
    {
      title: "Engine Summary",
      name: data?.engine?.engineSummary,
    },
    {
      title: "Engine Brand",
      name: data?.engine?.engineBrand,
    },
    {
      title: "Compression",
      name: "Cylinders",
    },
    {
      title: "Displacement",
      name: "6",
    },
    {
      title: "Fuel Induction",
      name: "Seqential Port Fuel Injection",
    },
    {
      title: "Max HP",
      name: "342",
    },
    {
      title: "Max Torque",
      name: "373",
    },
    {
      title: "Valves",
      name: "16",
    },
  ];
  const details7 = [
    {
      title: "Transmission Description",
      name: `${data?.trnasmisssionDescription}`,
    },
    { title: "Transmission Type", name: `${data?.trnasmisssionType}` },
    { title: "Transmission Gears", name: `${data?.trnasmisssionGear}` },
  ];
  const details8 = [
    { title: "Driver Type", name: "RWD" },
    { title: "Braking System", name: "Hydraulic" },
    { title: "Front Track Width", name: "68.1" },
    { title: "Rear Track Width", name: "135in" },
    { title: "Wheelbase", name: "135in" },
    { title: "Front Wheel Diameter", name: "16" },
    { title: "Rear Wheel Diameter", name: "16" },
    { title: "Rear Axle", name: "---" },
    { title: "Front Tire Type", name: "LT245/75R16" },
    { title: "Front Tire PSI", name: "---" },
    { title: "Rear Tire Type", name: "LT245/75R16" },
    { title: "Rear Tire PSI", name: "---" },
  ];
  return (
    <div className="specifications-main-container">
      <div className="specifications-inner-container">
        <div className="specifications-inner-container-left">
          <TextDetailsOne details={details1} title={title1} />
          <TextDetailsOne details={details2} title={title2} />
          <TextDetailsOne details={details3} title={title3} />
          <TextDetailsOne details={details4} title={title4} />
          <TextDetailsOne details={details5} title={title5} />
        </div>
        <div className="specifications-inner-container-right">
          <TextDetailsOne details={details6} title={title6} />
          <TextDetailsOne details={details7} title={title7} />
          <TextDetailsOne details={details8} title={title8} />
        </div>
      </div>
    </div>
  );
};
export default Specifications;
