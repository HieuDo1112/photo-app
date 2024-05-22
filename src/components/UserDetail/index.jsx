import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {Link, useParams} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail(props) {
  const user = useParams();
  const info = models.userModel(user.userId);

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
