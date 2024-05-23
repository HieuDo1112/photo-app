import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";
function TopBar (props) {
  const user = useParams();
  const infor = models.userModel(user.userId);
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            {user.page === "users" && "Info of " + infor.first_name }
            {user.page === "photos" && "Photos of " + infor.first_name}
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
