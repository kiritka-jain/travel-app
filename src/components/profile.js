import NavBar from "./navbar";
import { TextField } from "@mui/material";
import { Button } from "@mui/base";
import "./profile.css";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import DeleteProfileDialog from "./deleteProfileDialog";

const Profile = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAdmin ,setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    roleId: "",
  });
  const { token } = useAuth();
  const headers = {
    headers: { Authorization: token },
  };
  useEffect(() => {
    getUserProfile(token);
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const getUserProfile = async (token) => {
    try {
      const Response = await axios.get("/user/get_user_profile", headers);
      const userData = Response.data;
      if (userData.roleId === 2){
        setIsAdmin(true);
      }
      setFormData({
        name: userData.name,
        roleId: userData.roleId,
      });

    } catch (err) {
      console.log("err", err);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/user/update_user`, formData, headers);
      console.log("user profile updated sucessfully.");
      enqueueSnackbar("User profile updated sucessfully.", {
        variant: "success",
      });
    } catch (error) {
      console.log("error:", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  const deleteProfile = async (e) => {
    e.preventDefault();
    setIsDialogOpen(true);
    console.log(isDialogOpen);
  };
  
  return (
    <div>
      <NavBar isAdmin={isAdmin}/>
      <div className="profileformcontainer">
        <form>
          <div className="profileform">
            {(isAdmin)? <h1>Welcome Admin</h1>: <h1> Welcome User</h1>}
           
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              autoComplete="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Role"
              name="roleId"
              variant="outlined"
              autoComplete="Role"
              value={formData.roleId}
            />
            <Button
              className="updateProfile"
              type="submit"
              variant="contained"
              onClick={updateProfile}
            >
              Update Profile
            </Button>
            <Button
              className="updateProfile"
              type="submit"
              variant="contained"
              onClick={deleteProfile}
            >
              Delete Profile
            </Button>
          </div>
          <>{isDialogOpen ? <DeleteProfileDialog /> : null}</>
        </form>
      </div>
    </div>
  );
};
export default Profile;
