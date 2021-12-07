import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import CreateCourseModal from './CreateCourseModal';
import {token} from '../utils/global.utils';
const axios = require('axios').default;
const { API_URL } = process.env;

const columns = [
  { field: 'id', headerName: 'ID', flex: true  },
  { field: 'name', headerName: 'Name', flex: true },
  { field: 'description', headerName: 'Description', flex: true },
];


export default function Courses () {
  const [rows, setRows] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  useEffect(() => {
    const fetchGet = async () => {
      const header = {
        'Authorization': `Bearer ${token}`
      }
      try {
        const response = await axios.get(API_URL + '/courses', {
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
        Courses
      </Typography>
      <div style={{display: 'flex', justifyContent: 'end', margin: '20px'}}>
          <Button style={{margin:'10px'}} size="large" variant="contained" color="success" onClick={()=>setOpenCreateModal(true)}>Create Course</Button>
          <Button style={{margin:'10px'}} size="large" variant="outlined" color="error">Delete Course</Button>
      </div>
      <div style={{ height: 600, width: '100%' }}>
          <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              checkboxSelection
          />
      </div>
      <CreateCourseModal open={openCreateModal} handleClose={()=>setOpenCreateModal(false)}/>
    </div>
  </Box>
  );
  
}

