import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Admin.css"

const AdminLayout = (props) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
  };
  return (
    <React.Fragment>
      <div className="adminLayoutWrap">
        {isShowSidebar && <div className="overlay" onClick={toggleSidebar} />}
        <Sidebar
          page={props.page}
          currentUser={props.currentUser}
          isShowSidebar={isShowSidebar}
          toggleSidebar={toggleSidebar}
        />
        <div
          className={`adminLayoutInner ${isShowSidebar ? "marginLeft" : ""}`}
        >
          <Header currentUser={props.currentUser} />
          <div className="layoutContent">{props.children}</div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};
export default AdminLayout;
