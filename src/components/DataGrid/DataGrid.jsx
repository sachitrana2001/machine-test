import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import "./DataGrid.css";

const DataTable = ({ setSelectedRows, columns, rows }) => {
  // const headerStyles = {
  //   backgroundColor: "blue", // Header ka rang yahan par badalein
  //   color: "white", // Header ke text ka rang
  // };

  const handleRowSelection = (selection) => {
    // console.log("check selecetd row", selection);
    setSelectedRows(selection.selectionModel);
  };

  // Check Get Api end
  return (
    <div className="data-grid-container">
      <Box
        sx={{
          height: 400,
          width: "100%",
          "& .super-app-theme--header": {
            color: "#000",
            fontSize: "14px",
            fontWeight: "500",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          headerClassName="custom-header-class"
          onSelectionModelChange={handleRowSelection}
        />
      </Box>
    </div>
  );
};

export default DataTable;
