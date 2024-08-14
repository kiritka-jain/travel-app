import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

const TripRow = (props) => {
    const {id,destination, starts_at,  ends_at,days_left } = props;
    return (
        <>
                <td >{id}</td>
                <td>{destination}</td>
                <td>{starts_at}</td>
                <td>{ends_at}</td>
                <td>{days_left}</td>
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="sm" variant="plain" color="neutral">
                      Edit
                    </Button>
                    <Button size="sm" variant="soft" color="danger">
                      Delete
                    </Button>
                  </Box>
                </td>
        </>
       
    )
}
export default TripRow;