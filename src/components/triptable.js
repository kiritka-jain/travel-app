import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import TripRow from "./triprow";
import Box from "@mui/joy/Box";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.js";
import axios from "axios";

const TripTable = (props) => {
  const [trips, setTrips] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
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
    getUserTrips(token);
  }, []);

  return (
    <Box>
      <Sheet color="primary" variant="outlined" >
        <Table>
          <thead>
            <tr>
              <th style={{ width: 200 }}>Id</th>
              <th style={{ width: 200 }}>Destination</th>
              <th style={{ width: 200 }}>Starts At</th>
              <th style={{ width: 200 }}>Ends At</th>
              <th style={{ width: 200 }}>Time Left</th>
              <th style={{ width: 200 }}>Action</th>
            </tr>
          </thead>
          <tbody>
              {trips.map((trip) => (
                <tr>
                <TripRow
                  key={trip.id}
                  id={trip.id}
                  destination={trip.destination}
                  starts_at={trip.StartsAt}
                  ends_at={trip.EndsAt}
                />
                  </tr>
              ))}
          
          </tbody>
        </Table>
      </Sheet>
    </Box>
  );
};
export default TripTable;
