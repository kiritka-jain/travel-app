import { Box,Button } from "@mui/joy";


const UserRow = (props) => {
  const { id, name, loginId, password, roleId } = props;


  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{loginId}</td>
      <td>{password}</td>
      <td>{roleId} </td>
      <td>
        <Box sx={{ display: "flex", gap: 1 }}>
        <Button variant="outlined" >
            Get all user's trips
          </Button>
          <Button variant="outlined">
            Edit user's Profile
          </Button>
        </Box>
      </td>
    </>
  );
};
export default UserRow;
