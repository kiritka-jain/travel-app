import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import TripRow from "./triprow";
import Box from "@mui/joy/Box";

const TripTable = (props) => {
  const { trips,updateTrip } = props;

  return (
    <Box>
      <Sheet color="primary" variant="outlined">
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
              <tr key={trip.id}>
                <TripRow
                  id={trip.id}
                  destination={trip.destination}
                  starts_at={trip.StartsAt}
                  ends_at={trip.EndsAt}
                  updateTrip={updateTrip}
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
