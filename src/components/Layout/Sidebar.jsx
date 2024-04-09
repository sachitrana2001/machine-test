import React from "react";
import { Link } from "react-router-dom";
import {
  greaterThenIcon,
  rocketIcon,
  closedStateLogo,
  meterIcon,
  houseIcon,
  memberIcon,
  boxIcon,
  settingIcon,
  fuelIcon,
  moneyIcon,
  cardIcon,
  notesIcon,
  heartIcon,
} from "@/assets/Icons";

const Sidebar = ({ isShowSidebar, toggleSidebar }) => {
  return (
    <>
      <div className={`biSidebarWrap ${isShowSidebar ? "hide" : ""}`}>
        <div
          className={`${isShowSidebar ? "d-flex" : ""}`}
          style={{ justifyContent: "center" }}
        >
          {closedStateLogo({ width: 50, height: 50 })}
        </div>

        <button
          className={`arrowBtn ${!isShowSidebar ? "" : "rotate"}`}
          onClick={toggleSidebar}
        >
          {greaterThenIcon({ width: 14, height: 12, fill: "#fff" })}
        </button>
        <ul className="biSidebar" style={{ overflowX: "auto" }}>
          <li className="biList">
            <Link to="" className="biLink active">
              {rocketIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Getting Started</span>
            </Link>
          </li>
          <li className="biList">
            <Link to="/dashboard" className="biLink">
              {meterIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="biList">
            <Link to="/vehicles" className="biLink">
              {houseIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Depot Fleet Operation</span>
            </Link>
          </li>

          <li className="biList">
            <Link to="/vehicles" className="biLink">
              {memberIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>HRM</span>
            </Link>
          </li>
          <li className="biList">
            <Link to="/routesdiv" className="biLink">
              {boxIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Asset & Inventory</span>
            </Link>
          </li>
          <li className="biList">
            <Link to="/timetable" className="biLink">
              {settingIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Workshop & Maintenance</span>
            </Link>
          </li>
          <li className="biList">
            <Link to="/vehicles" className="biLink">
              {fuelIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Fuel & Charging</span>
            </Link>
          </li>
          <li className="biList">
            <Link to="/vehicles" className="biLink">
              {moneyIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Accounts & Finance</span>
            </Link>
          </li>
          <li className="biList">
            <Link to="/vehicles" className="biLink">
              {notesIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Reports</span>
            </Link>
          </li>
          <li className="biList">
            <Link to="/vehicles" className="biLink">
              {cardIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>User Roles</span>
            </Link>
          </li>
          <li className="biList">
            <Link to="/master-settings" className="biLink">
              {cardIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Master Settings</span>
            </Link>
            {isShowSidebar && (
              <ul>
                <li style={{ color: "#CDE9F6" }}>
                  <Link
                    to="/make-list"
                    style={{ color: "#CDE9F6", fontSize: "12px" }}
                  >
                    Make
                  </Link>
                </li>
                <li style={{ color: "#CDE9F6" }} className="biList">
                  <Link
                    to="/type-list"
                    style={{ color: "#CDE9F6", fontSize: "12px" }}
                  >
                    Type
                  </Link>
                </li>
                <li style={{ color: "#CDE9F6" }} className="biList">
                  <Link
                    to="/trim-list"
                    style={{ color: "#CDE9F6", fontSize: "12px" }}
                  >
                    Trim
                  </Link>
                </li>
                <li style={{ color: "#CDE9F6" }} className="biList">
                  <Link
                    to="/group-list"
                    style={{ color: "#CDE9F6", fontSize: "12px" }}
                  >
                    Group
                  </Link>
                </li>
                <li style={{ color: "#CDE9F6" }} className="biList">
                  <Link
                    to="/fabricator-list"
                    style={{ color: "#CDE9F6", fontSize: "12px" }}
                  >
                    Fabricator
                  </Link>
                </li>
                <li style={{ color: "#CDE9F6" }} className="biList">
                  <Link
                    to="/fuel-type-list"
                    style={{ color: "#CDE9F6", fontSize: "12px" }}
                  >
                    Fuel Type
                  </Link>
                </li>
                <li style={{ color: "#CDE9F6" }} className="biList">
                  <Link
                    to="/service-type-list"
                    style={{ color: "#CDE9F6", fontSize: "12px" }}
                  >
                    Service Type
                  </Link>
                </li>
                <li style={{ color: "#CDE9F6" }} className="biList">
                  <Link
                    to="/chassis-type-list"
                    style={{ color: "#CDE9F6", fontSize: "12px" }}
                  >
                    Chassis Type
                  </Link>
                </li>
                <li style={{ color: "#CDE9F6" }} className="biList">
                  <Link
                    to="/model-euro-list"
                    style={{ color: "#CDE9F6", fontSize: "12px" }}
                  >
                    Model Euro
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="biList">
            <Link to="/vehicles" className="biLink">
              {heartIcon({ width: 20, height: 20, fill: "#8da3b6" })}
              <span>Help</span>
            </Link>
          </li>

          {isShowSidebar ? (
            <div className="biList biSidebar">
              <div className="biLink">
                <div className="d-flex">
                  <strong>Version: </strong> &nbsp; <span>1.0.0</span>
                </div>
              </div>
              <div className="biLink">Powered By MargSoft</div>
            </div>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
