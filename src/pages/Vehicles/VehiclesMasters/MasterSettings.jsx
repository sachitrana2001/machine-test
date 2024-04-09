import React, { useState } from "react";
import "../List.css";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../../../SubComponent/BreadCrumbs";
const Vehicles = () => {
  const navigate = useNavigate();
  const onAddVehicle = () => {
    navigate("/make-list");
  };
  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const sidebarItems = [
    { label: "All", count: "33" },
    { label: "Master Material", count: "12" },
    { label: "Master Resource", count: "8" },
    { label: "Master Place", count: "12" },
    { label: "Master Document", count: "0" },
  ];
  const MASTERS = [
    "Vehicle Make",
    "Vehicle Type",
    "Vehicle Group",
    "Vehicle Model",
    "Vehicle Trim",
    "Fuel Type",
    "Model Euro",
    "Chassis Body Type",
    "Country",
    "State",
    "District",
    "Region",
    "Depot",
    "Bus Category",
    "Bus Service Type",
    "Village",
  ];
  return (
    <div className="w-100 ">
      <div className="bg-white h-24 p-5 border-gray-100 border-2">
        <div>
          <BreadCrumbs
            backNavi={() => navigate("/vehicles")}
            breadCrumbs={[]}
            boldItem={"Master Setting"}
          />
          <div className="heading-600-24 c-blue1 v-center">
            Standard Masters
          </div>
        </div>
      </div>
      <div className="flex w-100">
        <aside className="bg-white h-screen border-gray-100  w-1/5">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white text-gray-400 flex justify-between items-center px-5 py-2 ${
                activeItem === index ? "bg-[#E9F4FF] c-blue1" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <p>{item.label}</p>
              <p className="bg-white p-1 rounded-md ">{item.count}</p>
            </div>
          ))}
        </aside>
        <main className="grid grid-cols-4 w-4/5 m-5 gap-5">
          {MASTERS?.map((card, index) => (
            <div
              key={index} // Added key prop for React
              className="bg-white p-3 rounded-lg shadow flex flex-col justify-between h-full curser-pointer" // Added flex class to vertically center content
              onClick={onAddVehicle} // Corrected function name
            >
              <p className="c-blue1 font-semibold text-xl">{card}</p>{" "}
              <div className="flex justify-between items-center">
                <span className="bg-gray-300 text-gray-700 px-2 py-1 text-sm rounded-full">
                  Material
                </span>{" "}
                <p className="border-2 px-3 py-2.5 border-gray-300 rounded-full">
                  00
                </p>{" "}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};
export default Vehicles;
