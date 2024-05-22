import React from "react";
import { Typography, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";
// import images from "../../images";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos (props) {
    const user = useParams();
    const photo_info = models.photoOfUserModel(user.userId);
    const author_infor = models.userModel(user.userId);
    
    return (
      <>
        <Typography>
          Author: {author_infor.first_name} {author_infor.last_name}
        </Typography>
        <Typography>
          Picture took in: {author_infor.location}
        </Typography>
        <ImageList gap={8}>
          {photo_info.map((item) => (
            <ImageListItem>
              <img
                src={`${process.env.PUBLIC_URL}/images/${item.file_name}`}
              />
              <ImageListItemBar position="below" title={`${item.file_name}`}/>
            </ImageListItem>
          ))}
        </ImageList>
      </>
    );
}

export default UserPhotos;
