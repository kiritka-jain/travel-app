import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import TripRow from "./triprow";
import Box from "@mui/joy/Box";

const TripTable = (props) => {
  return (
    <Box>
      <Sheet>
        <Table>
            <thead>
              <tr>
                <th style={{ width: 200 }}>Id</th>
                <th style={{ width: 200 }}>Destination</th>
                <th style={{ width: 200 }}>Starts At</th>
                <th style={{ width: 200 }}>Ends At</th>
                <th style={{ width: 200 }}>Days Left</th>
                <th style={{ width: 200 }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TripRow />
              </tr>
            </tbody>
        </Table>
      </Sheet>
    </Box>
  );
};
export default TripTable;
