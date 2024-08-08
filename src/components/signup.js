import TextField from "@mui/material/TextField";
import "./signup.css";
import { Button } from "@mui/material";

const SignUp = (props) => {
  return (
    <div className="signupformcontainer">
      <div className="headerblock">
        <h4>Sign Up to Travel App</h4>
      </div>
        <div className="signupform">
          <TextField id="outlined-basic" 
          label="Email Id" 
          variant="outlined" 
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-confirmpassword-input"
            label="Confirm Password"
            type="password"
          />
          <Button className="signup" variant="contained">Sign Up</Button>
        </div>
    </div>
  );
};
export default SignUp;
