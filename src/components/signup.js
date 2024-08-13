import TextField from "@mui/material/TextField";
import "./signup.css";
import axios from "axios";
import { Button } from "@mui/material";
import { useState } from "react";
import {useSnackbar} from "notistack";
import { useNavigate } from "react-router-dom"

const SignUp = (props) => {
  const roleId = 3;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    confirmPassword: "",
  });
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const matchPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const validateForm = (formData) => {
    const { name, email, password, confirmPassword } = formData;
    const newError = {};
    if (!name) {newError.name = "Name is required.";}
    if (!validateEmail(email)) {newError.email = "Invalid Email.";}
    if (!matchPassword(password, confirmPassword)) {newError.confirmPassword = " Confirm password mismatch.";}
    return newError;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
    setError((error) => ({
      ...error,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    const newError = validateForm(formData);

    setError(newError);
    if (Object.keys(newError).length !== 0) {
      return;
    }
    setIsSubmitting(true);
    const newUser = {
      name: name,
      loginId: email,
      password: password,
      roleId: roleId,
    };
    const addUser = async (newUser) => {
      try {
        const response = await axios.post("/user/add_user", newUser);
        console.log("User created succesfully.", response.data);
        enqueueSnackbar("User created sucessullly.",{ variant:'success'});
        navigate("/login");
      } catch (err) {
        setApiError("Failed to create user. Please try again later.");
        enqueueSnackbar("Failed to create user. Please try again later.",{ variant:'error'});
        console.log("err:", err);
      }
    };
    addUser(newUser).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="signupformcontainer">
      <div className="headerblock">
        <h3>Sign Up to Travel App</h3>
        <form onSubmit={handleSubmit}>
          <div className="signupform">
            <TextField
              id="outlined-basic"
              label="Name"
              name="name"
              variant="outlined"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              error={!!error.name}
              helperText={error.name}
            />
            <TextField
              id="outlined-basic"
              label="Email Id"
              name="email"
              variant="outlined"
              autoComplete="username"
              value={formData.email}
              onChange={handleChange}
              error={!!error.email}
              helperText={error.email}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              error={!!error.password}
              helperText={error.password}
              inputProps={{
                style: { fontFamily: "password" },
              }}
            />
            <TextField
              id="outlined-confirmpassword-input"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!error.confirmPassword}
              helperText={error.confirmPassword}
              inputProps={{
                style: { fontFamily: "password" },
              }}
            />
            <Button
              type="submit"
              className="signup"
              disabled={isSubmitting}
              variant="contained"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </Button>
            {apiError && <div className="api-error">{apiError}</div>}
          </div>
          <div>
            <p>Already a user?</p>
            <a href="/login">Login here</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
