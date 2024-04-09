import React from "react";
import {
  searchIcon,
  questionIcon,
  notificationIcon,
  messageIcon,
} from "@/assets/Icons";

const Header = ({ currentUser }) => {
  return (
    <div className="biHeader">
      <a href="/">
        <img
          src="/assets/images/headerlogo.svg"
          className="logo"
          alt="Upsrtc"
        />
      </a>
      <ul class="biHeaderNav">
        <li className="biList">
          {searchIcon({ width: 24, height: 24, fill: "#8da3b6" })}
        </li>
        <li className="biList">
          {questionIcon({ width: 24, height: 24, fill: "#8da3b6" })}
        </li>
        <li className="biList">
          {notificationIcon({ width: 24, height: 24, fill: "#8da3b6" })}
        </li>
        <li className="biList">
          {messageIcon({ width: 24, height: 24, fill: "#8da3b6" })}
        </li>
        <li className="biUser">
          <div className="biUserWrap">
            <img
              src="/assets/images/user.png"
              alt="John Smith"
              className="biUserImg"
            />
            <div className="biUserNameWrap">
              <div className="biUserName">Admin</div>
              <div className="biUserRole">Super Admin</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Header;
