import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormDialog from "./dialog";
import { useState } from "react";
import moment from "moment";


const TripRow = (props) => {
  const { id, destination, starts_at, ends_at } = props;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const diffInDays = moment(starts_at).diff(moment(), "days");
  

  const handleEdit = () => {
    console.log("Edit button clicked..")
    setIsDialogOpen(true);
    console.log(isDialogOpen);
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
          <Button size="sm" variant="soft" color="danger">
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
        />:null}
      
    </>
  );
};
export default TripRow;
