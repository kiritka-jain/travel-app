import TripTable from "./triptable";
import AddTripCard from "./addtrip";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function Trip() {
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

  const addTrip = (updatedData) => {
    setTrips([...trips, updatedData]);
  };

  const updateTrip = (tripId, formData) => {
    const updatedTrip = trips.map((trip) =>
      trip.id === tripId
        ? {
            ...trip,
            destination: formData.destination,
            StartsAt: formData.StartsAt,
            EndsAt: formData.EndsAt,
          }
        : trip
    );
    setTrips(updatedTrip);
  };

  const deleteTrip = (tripId) => {
    const result = trips.filter((trip) => trip.id !== tripId);
    setTrips(result);
  };

  return (
    <div className="Trip">
      <AddTripCard addTrip={addTrip} />
      <TripTable
        trips={trips}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
      />
    </div>
  );
}
