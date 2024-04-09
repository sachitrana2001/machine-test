import React from "react";
import "./OverView.css";
import TextDetailsOne from "@/components/common/textDetails";
import ShowImageGridView from "@/components/common/imageDetails";

const OverView = ({ data }) => {
  const title1 = "Details";
  const title2 = "Service Detail";
  const title3 = "Additional Detail";
  const imageTitle = "Vehicle Image";
  const details = [
    { title: "Name", name: "Vehicle Name" },
    {
      title: "Registration Number",
      name: "UP32BD2345",
      lastText: "Check by VAHAN",
    },
    { title: "Chassis/Body Type", name: "Single-Decker" },
    { title: "Fuel type", name: "Compressed Natural Gas (CNG)" },
  ];
  const details1 = [
    { title: "Name", name: data?.vechicleRName },
    {
      title: "Registration Number",
      name: data?.vechicleName,
      lastText: "Check by VAHAN",
    },
    { title: "Chassis/Body Type", name: data?.Chassistype },
    { title: "Fuel type", name: data?.fuel },
    { title: "Manufacturing Year", name: data?.aging },
    { title: "Make", name: data?.onlyMake },
    { title: "Model", name: data?.onlyModal },
    { title: "Trim", name: data?.trim },
    { title: "Model Euro", name: data?.euro },
    { title: "Vehicle Colour", name: data?.color?.vehicleColourName },
    { title: "Chassis number / VIN", name: data?.chassis },
    { title: "Engine number", name: data?.engine },
  ];
  const details2 = [
    { title: "Registration State", name: "Uttar Pradesh" },
    {
      title: "Registration Date",
      name: data?.vehicleRegistrationDate,
      lastText: "Check by VAHAN",
    },
    {
      title: "Service Allotment Date",
      name: data?.vehicleServiceAllotmentDate,
    },
    {
      title: "Insurance Validity Date",
      name: data?.vehicleInsuranceValidityDate,
    },
    { title: "Road Tax Validity Date", name: data?.vehicleRoadTaxValidityDate },
    {
      title: "Pollution Validity",
      name: data?.vehiclePollutionCheckValidityDate,
    },
    { title: "State", name: "Uttar Pradesh" },
    { title: "Region", name: data?.region?.regionName },
    { title: "Depot", name: data?.depot },
    { title: "Vehicle Category", name: "---" },
    { title: "Vehicle Group", name: data?.vehicleGroup },
    { title: "Vehicle Service Type", name: data?.ServiceType },
    { title: "Sitting Configuration", name: "---" },
    { title: "Seat (Semi Sleeper)", name: "---" },
    { title: "Seat (Sleeper)", name: "---" },
    { title: "Odometer Reading (KM)", name: data?.odometerReading },
  ];
  const details3 = [
    { title: "Fabricator", name: "Uttar Pradesh" },
    { title: "Ownership", name: "22 March, 2023" },
    { title: "Operator", name: "21 Dec, 2023" },
  ];
  const imgDetails = [
    { imgurl: "/assets/images/user.png", name: "img1" },
    { imgurl: "/assets/images/user.png", name: "img2" },
    { imgurl: "/assets/images/user.png", name: "img2" },
    { imgurl: "/assets/images/user.png", name: "img1" },
    { imgurl: "/assets/images/user.png", name: "img2" },
    { imgurl: "/assets/images/user.png", name: "img2" },
    { imgurl: "/assets/images/user.png", name: "img1" },
    { imgurl: "/assets/images/user.png", name: "img2" },
    { imgurl: "/assets/images/user.png", name: "img2" },
  ];
  console.log("overview data---->>>", data);
  return (
    <div className="overview-main-container">
      <div className="overview-inner-container">
        <div className="overview-inner-container-left">
          <TextDetailsOne details={details1} title={title1} />
          <TextDetailsOne details={details2} title={title2} />
          <TextDetailsOne details={details} title={title3} />
          <ShowImageGridView details={imgDetails} title={imageTitle} />
        </div>
        <div className="overview-inner-container-right">
          <div className="w-100">
            <img className="w-100" src="/assets/images/openissue.svg" alt="" />
          </div>

          <div className="w-100">
            <img
              className="w-100"
              src="/assets/images/serviceReminder.svg"
              alt=""
            />
          </div>

          <div className="w-100">
            <img
              className="w-100"
              src="/assets/images/RenewalReminders.svg"
              alt=""
            />
          </div>

          <div className="w-100">
            <img className="w-100" src="/assets/images/Incomplete.svg" alt="" />
          </div>

          <div className="w-100">
            <img
              className="w-100"
              src="/assets/images/CriticalFaults.svg"
              alt=""
            />
          </div>

          <div className="w-100">
            <img className="w-100" src="/assets/images/costowner.svg" alt="" />
          </div>
          <div className="w-100">
            <img
              className="w-100"
              src="/assets/images/Utilization.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
