import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {Link, useParams} from "react-router-dom";
import FetchModel from "../../lib/fetchModelData";

/**
 * Define UserDetail, a React component of Project 4.
 */ 
function UserDetail() {
  const user = useParams();
  const info = FetchModel("http://localhost:8000/users/" + user.userId)
  // It fetch new data but no update
  console.log("Fetch INFO", info)
  
  return (
    <>
      <Typography>
        First name: {info.first_name}
      </Typography>
      <Typography>
        Last name: {info.last_name}
      </Typography>
      <Typography>
        Description: {info.description}
      </Typography>
      <Typography>
        Location: {info.location}
      </Typography>
      <Link to={"/photos/" + user.userId}><button>See Photo</button></Link>
    </>
  );
}

export default UserDetail;
