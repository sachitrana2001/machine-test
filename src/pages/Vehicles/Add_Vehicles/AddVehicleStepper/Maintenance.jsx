import React from "react";

const Maintenance = () => {
  const MaintenanceData = [
    {
      left: {
        title: "Maintenance",
        para: "Vehicle Maintenance Schedule Settings",
      },
      right: {
        title: "Choose a Vehicle Service Program",
        para: "Service Programs automatically manage Service Reminders for Vehicles that share common preventative maintenance needs.",
        fields: [
          {
            block_type: "field-type-one",
            input_type: "textFieldField",
            labelName: "In-Service Date",
            name: "inServiceDate",
            placeholder: "Enter In-Service Date",
          },
          {
            block_type: "field-type-one",
            input_type: "textFieldField",
            labelName: "In-Service Odometer",
            name: "inServiceOdometer",
            placeholder: "Enter In-Service Odometer",
          },
        ],
      },
    },
  ];
  return MaintenanceData?.map((items, index) => (
    <div className={`add-v-form ${index > 0 ? "pt-104" : ""}`}>
      <div className="add-v-form-left-section">
        <div className="heading-600-16 c-blue1">{items.left.title}</div>
        <div className="heading-400-12 c-gray2">{items.left.para}</div>
      </div>
      <div className="add-v-form-right-section">
        <div className="add-v-form-section">
          <div className="heading-600-16 c-gray2">{items.right.title}</div>
          <div className="heading-400-12 c-gray2">{items.right.para}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: `2px solid #0DC440`,
              padding: "10px",
              borderRadius: "4px",
              height: "60px",
            }}
          >
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                style={{ backgroundColor: "#0DC440", color: "white" }}
                checked
              />
              <span style={{ marginLeft: "10px" }}>Service Program 1</span>
              <span
                style={{
                  color: "#F68723",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                13 Point Inspection
              </span>
            </div>
            <div>
              Select Frequency <span>{">"}</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: `2px solid #E0E0E0`,
              padding: "10px",
              borderRadius: "4px",
              height: "60px",
            }}
          >
            <div style={{ display: "flex" }}>
              <input type="checkbox" />
              <span style={{ marginLeft: "10px" }}>Service Program 1</span>
              <span
                style={{
                  color: "#F68723",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                13 Point Inspection
              </span>
            </div>
            <div>
              Select Frequency <span>{">"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Maintenance;
