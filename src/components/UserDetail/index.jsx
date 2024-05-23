import { Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail(props) {
    const user = useParams();
    const infor = models.userModel(user.userId);
    props.handle(infor.first_name);
    return (
        <>
          <Typography>
            FirstName : {infor.first_name}
          </Typography>
          <Typography>
            LastName : {infor.last_name}
          </Typography>
          <Typography>
            Location : {infor.location}
          </Typography>
          <Typography>
            Description : {infor.description}
          </Typography>
          <Typography>
            Occupation : {infor.occupation}
          </Typography>
          <Link to={"http://localhost:3000/photos/" + infor._id} ><button>View Photos</button> </Link>
        </>
    );
}

export default UserDetail;
