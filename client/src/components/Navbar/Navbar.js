import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button, Typography, Toolbar, Avatar } from "@mui/material";
import travel from "../../images/travel.png";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode'
import {StyledAppBar, StyledTypography, StyledToolbar } from "./styles.js";




export const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({type: 'LOGOUT'})
    navigate('/auth')
    setUser(null);
  }
  useEffect(() =>{
    const token = user?.token

    if(token) {
      const decodedToken = decode(token)

      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])
  
  return (
    <StyledAppBar position="static" color="inherit">
      <div className="branchContainer">
        <StyledTypography
          component={Link}
          to="/"
          variant="h2"
          align="center"
        >
          picshare
        </StyledTypography>
        <img src={travel} alt="travel" width="60" height="60" />
      </div>
      <StyledToolbar>
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
            <Button variant="contained" onClick={logout} className="logout" color="secondary">
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
      </StyledToolbar>
    </StyledAppBar>
  );
};
