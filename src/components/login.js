import TextField from "@mui/material/TextField";
import "./login.css";
import axios from "axios";
import { Button } from "@mui/material";
import { useState } from "react";
import {useSnackbar} from "notistack";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
  });
  const [isLogging, setIsLogging] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const validateEmail = (loginId) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(loginId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLogging(true);
    if (validateEmail(formData.loginId)) {
      const body = {
        loginId: formData.loginId,
        password: formData.password,
      };
      try {
        const response = await axios.post("/user/get_token", body);
        const token = response.data;
        console.log(response.data);
        login(token.token);
        enqueueSnackbar("User Logged In sucessullly.",{ variant:'success'})
        navigate("/home");

      } catch (err) {
        console.log("err:", err);
        enqueueSnackbar(err,{ variant:'error'})
      } finally {
        setIsLogging(false);
      }
    }
  };

  return (
    <div className="loginformcontainer">
      <div className="headerblock">
        <h3>Log In to Travel App</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="loginform">
          <TextField
            id="outlined-basic"
            label="Log In Id"
            name="loginId"
            variant="outlined"
            autoComplete="username"
            value={formData.loginId}
            onChange={handleChange}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            inputProps={{
              style: { fontFamily: "password" },
            }}
          />

          <Button className="logIn" type="submit" variant="contained">
            {isLogging ? "Logging In..." : "Log in"}
          </Button>
          <div>
            <p>New to Travel App?</p>
            <a href="/signup">Sign Up here</a>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
