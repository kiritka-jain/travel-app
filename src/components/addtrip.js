import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Button from "@mui/joy/Button";
import CardActions from "@mui/joy/CardActions";
import Input from "@mui/joy/Input";
import Add from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import moment from "moment";
import { enqueueSnackbar } from "notistack";
import { useAuth } from "../context/AuthContext";
import axios from "axios";


export default function AddTripCard(props) {
  const {updateTrip} = props;
  const { token } = useAuth();

  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-01-01");
 

  const handleAddTrip = async() => {
    const newTrip = {
      destination: destination,
      StartsAt: startDate,
      EndsAt: endDate,
    };
    const headers = {
      headers: { Authorization: token },
    };
    const diffInDays = moment(endDate).diff(moment(startDate), "days");

    if (diffInDays > 0){
        try {
            const response = await axios.post("/trip/add_trip",newTrip,headers);
    
            enqueueSnackbar("User's trip added sucessfully.", { variant: "success" });
            updateTrip(response.data);
            setDestination("");
            setStartDate("2024-01-01");
            setEndDate ("2024-01-01");
        } catch (error) {
          console.log("error:", error);
          enqueueSnackbar(error.message, { variant: "error" });
        }
      }else{
        enqueueSnackbar("End date must be greater than start date." ,{ variant: "error" });
      }
  };

  return (
    <Card variant="soft">
      <div>
        <Divider inset="none" />
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(100px, 1fr))",
            gap: 6,
          }}
        >
          <Input
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <TextField
            id="date"
            label="Start Date"
            value={startDate}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            id="date"
            label="End Date"
            value={endDate}
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <CardActions>
            <Button
              type="submit"
              startDecorator={<Add />}
              variant="solid"
              color="primary"
              onClick={handleAddTrip}
            >
              Add Trip
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}
