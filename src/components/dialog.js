import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import moment from 'moment';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

export default function FormDialog(props) {
  const{id,destination,starts_at,ends_at,handleCloseDialog,updateTrip} = props;
  const [open, setOpen] = React.useState(true);
  const { token } = useAuth();

  const headers = {
    headers: { Authorization: token },
  };
  const [formData,setFormData] = useState({
    destination : destination,
    StartsAt : starts_at,
    EndsAt : ends_at 
  })
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
}

  const handleSubmit= async(event) => {
    event.preventDefault();
    console.log(formData); 
    const diffInDays = moment(formData.EndsAt).diff(moment(formData.StartsAt), "days");

    if (diffInDays > 0){
        try {
            const response = await axios.put(`/trip/update_user_trip/${id}`,formData,headers);
    
            enqueueSnackbar("User's trip updated sucessfully.", { variant: "success" });
            updateTrip(id,formData);
        } catch (error) {
          console.log("error:", error);
          enqueueSnackbar(error.message, { variant: "error" });
        }
      }else{
        enqueueSnackbar("End date must be greater than start date." ,{ variant: "error" });
      };
    handleClose();
    handleCloseDialog();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form'
        }}
      >
        <DialogContent>
          <DialogContentText>Edit your trip values</DialogContentText>
          <TextField
            label= "Destination"
            placeholder="Enter Destination"
            name = "destination"
            value={formData.destination}
            onChange={handleChange}
          />
          <TextField
            id="date"
            label="Start Date"
            value={formData.StartsAt}
            name= "StartsAt"
            type="date"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="End Date"
            value={formData.EndsAt}
            type="date"
            name="EndsAt"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}