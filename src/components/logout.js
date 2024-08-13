import { useAuth } from "../context/AuthContext";
import Button from "@mui/material/Button";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { logout, token } = useAuth();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const headers = {
      headers: { Authorization: token },
    };

    try {
      const response = await axios.delete("/user/logout_session", headers);
      enqueueSnackbar("User Logged Out sucessullly.", { variant: "success" });
      logout(token);
      navigate("/login");
    } catch (err) {
      console.log("err:", err);
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <Button color="inherit" onClick={handleClick}>
      Log Out
    </Button>
  );
};
export default LogOut;
