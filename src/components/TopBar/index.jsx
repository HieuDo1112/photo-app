import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import FetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React component of Project 4.
 */
const TopBar = () => {
  const user = useParams();
  const info = FetchModel("http://localhost:8000/users/" + user.userId);
  
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          { user.page === "users" && "Info of " + info.first_name + " " + info.last_name }
          { user.page === "photos" && "Photo of " + info.first_name + " " + info.last_name }
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
