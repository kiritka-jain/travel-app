import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Button from "@mui/joy/Button";
import CardActions from "@mui/joy/CardActions";
import Input from "@mui/joy/Input";
import Add from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

export default function AddTripCard() {
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
            <Input placeholder="Enter Destination" />
            <TextField
              id="date"
              label="Start Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          <CardActions>
            <Button
              startDecorator={<Add />}
              variant="solid"
              color="primary"
            >
              Add Trip
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}
