import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import CreateCourseModal from './CreateCourseModal';
const axios = require('axios').default;

const columns = [
  { field: 'id', headerName: 'ID', flex: true,resizable: true  },
  { field: 'name', headerName: 'Name', flex: true, resizable: true },
  { field: 'description', headerName: 'Description', flex: true, resizable: true },
];

const rows = [
  { id: 1, name: 'Snow', description: 'Jon'},
  { id: 2, name: 'Lannister', description: 'Cersei'},
  { id: 3, name: 'Lannister', description: 'Jaime' },
  { id: 4, name: 'Stark', description: 'Arya' },
  { id: 5, name: 'Targaryen', description: 'Daenerys'},
  { id: 6, name: 'Melisandre', description: null },
  { id: 7, name: 'Clifford', description: 'Ferrara' },
  { id: 8, name: 'Frances', description: 'Rossini'},
  { id: 9, name: 'Roxie', description: 'Harvey' },
];


export default function Courses () {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/courses');
        const data = response.data;
        console.log(response);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
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

