import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl } from '@material-ui/core';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function CreateCourseModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} padding={3}>
         <FormControl style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
         <Typography id="modal-modal-title" variant="h5" component="h2" style={{margin:'20px'}}>
            Create a Course
          </Typography>
          <Grid container spacing={4}>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="description"
                        label="Description"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Button color="success" size="large" style={{ marginTop: '20px'}} variant="contained" onClick={props.handleClose}>Create</Button>
         </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
