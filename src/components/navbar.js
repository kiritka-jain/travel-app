import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useAuth } from "../context/AuthContext";
import LogOut from "./logout.js";
import { useState } from "react";

const NavBar = (props) => {
  const { isAdmin } = props;
  const { token } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Travel App
          </Typography>
          {!token ? (
            <Button color="inherit" href="/login">
              Login
            </Button>
          ) : (
            <>
              {!isAdmin ? (
                <>
                  <Button color="inherit" href="/profile">
                    Profile
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit" href="/admin">
                    Get All Users
                  </Button>
                </>
              )}
              <LogOut />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavBar;
