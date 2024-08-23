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
    const addTrip = (updatedData)=>{
      setTrips([...trips, updatedData]);
    }
    const updateTrip = (tripId,formData)=>{
      for(let i=0;i<trips.length;i++){
        if (trips[i].id === tripId){
          trips[i].destination = formData.destination;
          trips[i].StartsAt = formData.StartsAt;
          trips[i].EndsAt = formData.EndsAt
        }
      }
      setTrips(trips);
    }

    return (
        <div className="Trip">
          <AddTripCard  addTrip={addTrip}/>
          <TripTable trips={trips} updateTrip={updateTrip}/>
        </div>
      );




}