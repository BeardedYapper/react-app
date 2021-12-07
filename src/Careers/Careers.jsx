import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import CreateCareerModal from './CreateCareerModal';
import {token} from '../utils/global.utils';
const axios = require('axios').default;
const { API_URL } = process.env;

const columns = [
  { field: 'id', headerName: 'ID', flex: true },
  { field: 'name', headerName: 'Name', flex: true },
  { field: 'description', headerName: 'Description', flex: true },
  { field: 'full_semesters', headerName: 'Semesters', flex: true },
  { field: 'last_year_applicants_count', headerName: 'Last Year Applicants', flex: true },
  { field: 'current_year_slots', headerName: 'Current Slots', flex: true },
  { field: 'study_plan', headerName: 'Study Plan', flex: true },
  { field: 'available', headerName: 'Available', flex: true },
  { field: 'created_at', headerName: 'Created At', flex: true },
  { field: 'updated_at', headerName: 'Updated At', flex: true },
];

export default function Careers() {
  const [rows, setRows] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  useEffect(() => {
    const fetchGet = async () => {
      const header = {
        'Authorization': `Bearer ${token}`
      }
      try {
        const response = await axios.get(API_URL + '/careers', {
          headers: header
        });
        const data = response.data;
        setRows(data);
        console.log(response);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGet();
  }, []);
  return (
    <Box style={{margin: 'auto'}} padding={5}>
      <div>
        <Typography variant="h3" style={{marginTop: '20px', marginBottom: '20px'}}>
        Careers
        </Typography>
        <div style={{display: 'flex', justifyContent: 'end', margin: '20px'}}>
            <Button style={{margin:'10px'}} size="large" variant="contained" color="success" onClick={()=>setOpenCreateModal(true)}>Create Career</Button>
            <Button style={{margin:'10px'}} size="large" variant="outlined" color="error">Delete Career</Button>
        </div>
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                columnBuffer={10}
            />
        </div>
        <CreateCareerModal open={openCreateModal} handleClose={()=>setOpenCreateModal(false)}/>
      </div>
    </Box>
  );
}

