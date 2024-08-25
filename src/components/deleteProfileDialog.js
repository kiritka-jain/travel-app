import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";


export default function DeleteProfileDialog() {
  const [open, setOpen] = React.useState(true);
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async(e)=>{
    e.preventDefault();
    const headers = {
      headers: { Authorization: token },
    };
    try {
      
      const response = await axios.delete(`/user/delete_user`,headers);
      enqueueSnackbar("User profile deleted sucessfully.", {
        variant: "success",
      });
      navigate("/login");
    } catch (error) {
      console.log("error:", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your profile?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button type="submit" onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
