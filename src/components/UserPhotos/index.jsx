import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React from "react";
import { useParams } from "react-router-dom";
import models from '../../modelData/models';
import "./styles.css";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos (props) {
  const user = useParams();
  const photo_info = models.photoOfUserModel(user.userId)
  const user_info = models.userModel(user.userId);
    
    return (
      <>
      <Typography>
        The author is : {user_info.first_name}
      </Typography>
      <ImageList sx={{ width: 500, height: 450 }}>
      {photo_info.map((item) => (
        <ImageListItem key={item.file_name}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${item.file_name}`}
            alt={item.file_name}
          />
          <ImageListItemBar
            // title={<span>The author is : {user_info.first_name}</span>}
            title = {item.file_name}
            subtitle={<span>Date and time : {item.date_time}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
  }

export default UserPhotos;
