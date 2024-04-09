import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommonLayout = (props) => (
  <React.Fragment>
    <div className="layout-body">{props.children}</div>
    <ToastContainer />
  </React.Fragment>
);
export default CommonLayout;
