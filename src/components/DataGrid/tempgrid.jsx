import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import './DataGrid.css';
import { useNavigate } from 'react-router-dom';

const RDataGrid = ({ apiUrl, columnDef }) => {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    const getRowId = (row) => row.id;

    useEffect(() => {
        const fetchData = async () => {
            console.log(11111);
            try {
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBhM2U2ZTFkZjY3YzJhMGVhMmY5NDMiLCJpYXQiOjE3MTIxMjQ0NjZ9.49ygcznUPPg6jSewMjOcV0SX_TT5vx3KuuiXSfgHOqs"

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });
                const responseData = await response.json();
                console.log(apiUrl)
                if (responseData.data) {
                    const rowdata = responseData.data.map((item, index) => ({
                        ...item, 
                        id: index + 1,
                    }));
                    setRows(rowdata);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [apiUrl]);

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columnDef}
                getRowId={getRowId}
                pageSize={5}
                checkboxSelection
                disableRowSelectionOnClick
                headerClassName="custom-header-class"
            />
        </Box>
    );
};

export default RDataGrid;
