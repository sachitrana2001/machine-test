import React, { useState } from "react";
import "./VehiclePreview.css";
import { useNavigate, useLocation } from "react-router-dom";
import BreadCrumbs from "../../../SubComponent/BreadCrumbs";
import {
  currentTimeIcon,
  editIcon,
  driverIcon,
  conductorIcon,
  editIcon1,
} from "../../../assets/Icons";
import OverView from "./OverView/OverView";
import Specifications from "./Specifications/Specifications";
import Lifecycle from "./Lifecycle/Lifecycle";

const PreviewVehicle = () => {
  const [isActiveTabs, setIsActiveTab] = useState("Overview");
  const navigate = useNavigate();
  const location = useLocation();
  const { rowData, comparator } = location.state;
  console.log("data grid row data---->>>>", location.state?.rowData);
  // Interpret the string identifier and execute appropriate logic
  // let comparisonResult;
  // if (comparator === 'gridNillComparator') {
  //   // Execute logic related to gridNillComparator
  //   comparisonResult = gridNillComparator(rowData.value1, rowData.value2);
  //   console.log("preview data--->>>",comparisonResult);
  // }

  const hasActiveTabHandler = (active) => {
    setIsActiveTab(active);
  };
  const boldItem = "Vehicles";
  const tabs = [
    { tabName: "Overview" },
    { tabName: "Specifications" },
    { tabName: "Lifecycle & Cost Detail" },
    { tabName: "Time Table" },
    { tabName: "Meter History" },
    { tabName: "Expense History" },
    { tabName: "Replacement Analysis" },
    { tabName: "Issue" },
    { tabName: "Service History" },
    { tabName: "Work Order" },
    { tabName: "More" },
  ];
  const headerDetails = {
    title: "Vehicle No.",
    para1:
      "Vehicle Type | Manufacturing Year | Chassis No. | Engine No. | Seats",
  };
  return (
    <div className="preview-v-main-container">
      <div className="preview-v-form-container">
        <div className="preview-v-form-top-section ">
          <div className="top-upper-section d-h-between">
            <div>
              <BreadCrumbs
                backNavi={() => navigate("/vehicles")}
                breadCrumbs={[{}]}
                boldItem={boldItem}
              />
              <div className="preview-top-v-details">
                <div className="preview-top-v-img"></div>
                <div>
                  <div className="heading-600-24 c-blue1 v-center pt-7x">
                    {headerDetails.title}
                  </div>
                  <div className="heading-400-12 c-gray5">
                    {headerDetails.para1}
                  </div>
                  <div className="preview-header-bottom">
                    <div className="heading-400-10 c-gray6 cmr-div">
                      {currentTimeIcon({ width: 8, height: 8 })}Current Meter
                      Reading{editIcon({ width: 7, height: 7 })}
                    </div>
                    <div className="heading-400-12 c-gray6">
                      Status | Vehicle Group |{" "}
                      {driverIcon({ width: 8, height: 11 })} Driver1 |{" "}
                      {driverIcon({ width: 8, height: 11 })} Driver 2 |{" "}
                      {conductorIcon({ width: 8, height: 11 })} Conductor
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="preview-v-form-top-button">
              <button
                className="blue-button heading-700-15"
                onClick={() =>
                  navigate("/add-vehicles", {
                    state: {
                      editData: location.state?.rowData,
                      status: "edit",
                    },
                  })
                }
              >
                {editIcon1({ width: 14, height: 14 })} Edit
              </button>
            </div>
          </div>
          <div className="top-bottom-section">
            <div className="tabs ">
              {tabs.map((item, index) => (
                <div
                  className={` tab ${
                    isActiveTabs === item.tabName ? "tab-active" : ""
                  }`}
                  key={index}
                  onClick={() => hasActiveTabHandler(item.tabName)}
                >
                  <div
                    className={` ${
                      isActiveTabs === item.tabName
                        ? "heading-600-16 c-blue2 "
                        : "heading-400-16 c-gray"
                    } v-center`}
                  >
                    {" "}
                    {item.tabName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isActiveTabs === "Overview" && (
          <OverView data={location.state?.rowData} />
        )}
        {isActiveTabs === "Specifications" && (
          <Specifications data={location.state?.rowData} />
        )}
        {isActiveTabs === tabs[2].tabName && (
          <Lifecycle data={location.state?.rowData} />
        )}
      </div>
    </div>
  );
};

export default PreviewVehicle;
