import TripTable from "./triptable";
import AddTripCard from "./addtrip";
import { useState,useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";





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
    const updateTrip = (updatedData)=>{
      setTrips([...trips, updatedData]);
    }


    
    

    return (
        <div className="Trip">
          <AddTripCard  updateTrip={updateTrip}/>
          <TripTable trips={trips}/>
        </div>
      );




}