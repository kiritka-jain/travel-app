import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import UserRow from "./userrow";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const UserTable = (props) => {
  const token = useAuth();
  const [users,setUsers]  = useState([]);


  useEffect(() => {
    getUsers(token);
  }, []);

  const getUsers = async (token) => {
    const headers = {
      headers: { Authorization: token },
    };
    try {
      const Response = await axios.get("/user/get_users", headers);
      const usersList = Response.data;
      console.log(usersList);
      setUsers(usersList);
    } catch (err) {
      console.log("err", err);
    }
  };


  return (
    <Box>
      <Sheet color="primary" variant="outlined">
        <Table>
          <thead>
            <tr>
              <th style={{ width: 200 }}>id</th>
              <th style={{ width: 200 }}>name</th>
              <th style={{ width: 200 }}> Login Id</th>
              <th style={{ width: 200 }}> Password</th>
              <th style={{ width: 200 }}>Role Id</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <UserRow
                  id={user.id}
                  name={user.name}
                  loginId={user.loginId}
                  password={user.password}
                  roleId={user.roleId}
                />
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Box>
  );
};
export default UserTable;
