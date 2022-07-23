import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Typography, Toolbar, Avatar } from "@mui/material";
import travel from "../../images/travel.png";
import "./styles.css";

export const Navbar = () => {
  const user = null;
  return (
    <AppBar id="appBar" position="static" color="inherit">
      <div className="branchContainer">
        <Typography
          id="heading"
          component={Link}
          to="/"
          variant="h2"
          align="center"
        >
          Travel
        </Typography>
        <img id="image" src={travel} alt="travel" width="60" height="60" />
      </div>
      <Toolbar className="toolbar">
        {user ? (
          <div className="profile">
            <Avatar
              className="purple"
              alt={user.result.name}
              ser={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className="userName" variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" className="logout" color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
