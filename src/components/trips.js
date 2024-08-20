import TripTable from "./triptable";
import AddTripCard from "./addtrip";
import { useState,useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { enqueueSnackbar } from "notistack";




export default function Trip(){
    const [trips, setTrips] = useState([]);
    const { token } = useAuth();

    useEffect(() => {
        getUserTrips(token);
      }, [token]); 

    const getUserTrips = async (token) => {
        const headers = {
          headers: { Authorization: token },
        };
        try {
          const Response = await axios.get("/trip/get_user_trips", headers);
          const tripList = Response.data;
          console.log(tripList);
          setTrips(tripList);
        } catch (err) {
          console.log("err", err);
        }
      };


    const addTrip = async(newTrip) => {
        const headers = {
          headers: { Authorization: token },
        };
        try {
            const response = await axios.post("/trip/add_trip",newTrip,headers);
    
            enqueueSnackbar("User's trip added sucessfully.", { variant: "success" });
            setTrips([...trips, response.data]);
            // getUserTrips(token);
        } catch (error) {
          console.log("error:", error);
          enqueueSnackbar(error.message, { variant: "error" });
        }
      };
    

    return (
        <div className="Trip">
          <AddTripCard  addTrip={addTrip}/>
          <TripTable trips={trips}/>
        </div>
      );




}