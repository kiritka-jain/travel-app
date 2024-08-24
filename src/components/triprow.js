import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormDialog from "./dialog";
import { useState } from "react";
import moment from "moment";
import { useAuth } from "../context/AuthContext";
import { enqueueSnackbar } from "notistack";
import axios from "axios";


const TripRow = (props) => {
  const { id, destination, starts_at, ends_at,updateTrip,deleteTrip } = props;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const diffInDays = moment(starts_at).diff(moment(), "days");
  const {token}= useAuth();

  

  const handleEdit = () => {
    setIsDialogOpen(true);
    console.log(isDialogOpen);
  };

  const handleCloseDialog = ()=>{
    setIsDialogOpen(false);
  }


  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(token)

    const headers = {
      headers: { Authorization: token },
    };

    try {
      const response = await axios.delete(`/trip/delete_user_trip/${id}`, headers);
      enqueueSnackbar("Trip deleted sucessullly.", { variant: "success" });
      deleteTrip(id);
    } catch (err) {
      console.log("err:", err);
      enqueueSnackbar(err, { variant: "error" });
    }
  };

  return (
    <>
      <td>{id}</td>
      <td>{destination}</td>
      <td>{starts_at}</td>
      <td>{ends_at}</td>
      <td>{diffInDays} </td>
      <td>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button size="sm" variant="plain" color="neutral" onClick={handleEdit}>
            Edit
          </Button>
          <Button size="sm" variant="soft" color="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </td>
      {(isDialogOpen)?
          <FormDialog
          id={id}
          destination={destination}
          starts_at={starts_at}
          ends_at = {ends_at}
          handleCloseDialog={handleCloseDialog}
          updateTrip={updateTrip}
        />:null}
      
    </>
  );
};
export default TripRow;
