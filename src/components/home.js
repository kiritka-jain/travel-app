import NavBar from "./navbar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TripTable from "./triptable";

function Home() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login",{replace: true});
    }
  }, [token]);

  if(!token){
    return null;
  }

  return (
    <div className="Home">
      <NavBar />
      <TripTable/>
    </div>
  );
}

export default Home;
