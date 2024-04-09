import { leftArrowIcon, slashIcon } from "../assets/Icons";
import React from "react";

const BreadCrumbs = ({ breadCrumbs, boldItem, backNavi }) => {
  return (
    <div className="breadcrubs-main-container">
      <div className="breadcrubs-content">
        <div className="d-h-center curser-pointer" onClick={backNavi}>
          {leftArrowIcon({ width: 14, height: 10 })}
        </div>
        {breadCrumbs.length > 0 &&
          breadCrumbs.map((item, index) => (
            <div key={index} className="bread-breadcrubs">
              <div className="heading-400-14 c-gray2 d-h-center curser-pointer">
                {item.name}
              </div>
              <div className="bread-arrow d-h-center">
                {slashIcon({ width: 16, height: 16 })}
              </div>
            </div>
          ))}
        <div className="heading-600-14 c-gray2 d-h-center curser-pointer">
          {boldItem}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
