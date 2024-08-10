import TextField from "@mui/material/TextField";
import "./login.css";
import { Button } from "@mui/material";

const Login = (props) => {
  return (
    <div className="loginformcontainer">
      <div className="headerblock">
        <h3>Log In to Travel App</h3>
      </div>
        <div className="loginform">
          <TextField id="outlined-basic" 
          label="LogIn Id" 
          variant="outlined" 
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button className="logIn" variant="contained">LogIn</Button>
        </div>
    </div>
  );
};
export default Login;
