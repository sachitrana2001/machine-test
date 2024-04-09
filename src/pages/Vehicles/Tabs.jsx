import React from "react";
import "./Tabs.css";
const Tabs = ({isActiveTab,setIsActiveTab}) => {
    return (
        <div className="tabs-wrap">
            <button onClick={() => setIsActiveTab("all")} className={`tab ${isActiveTab === "all" ? "active" : ""}`}>All</button>
            <button onClick={() => setIsActiveTab("assigned")} className={`tab ${isActiveTab === "assigned" ? "active" : ""}`}>Assigned</button>
            <button onClick={() => setIsActiveTab("unassigned")} className={`tab ${isActiveTab === "unassigned" ? "active" : ""}`}>Unassigned</button>
            <button onClick={() => setIsActiveTab("archived")} className={`tab ${isActiveTab === "archived" ? "active" : ""}`}>Archived</button>
        </div>
    );
}
export default Tabs;