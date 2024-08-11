import TextField from "@mui/material/TextField";
import "./login.css";
import axios from "axios";
import { Button } from "@mui/material";
import { useState } from "react";

const Login = (props) => {
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
  });
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
    if (validateEmail(formData.loginId)) {
      const queryParams = {
        params: {
          loginId: formData.loginId,
          password: formData.password,
        },
      };
      try {
        const response = await axios.get("/user/get_user_by_loginId", queryParams);
        console.log(response.data);
      } catch (err) {
        console.log("err:", err);
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
            LogIn
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
