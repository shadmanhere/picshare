import React from 'react'
import { AppBar, Typography } from "@mui/material";
import travel from "../../images/travel.png";

export const Navbar = () => {
  return (
    <AppBar id="appBar" position="static" color="inherit">
        <Typography id="heading" variant="h2" align="center">
          Travel
        </Typography>
        <img id="image" src={travel} alt="travel" width="60" height="60" />
      </AppBar>
  )
}
