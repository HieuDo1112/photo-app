import React from "react";
import { Typography, ImageList, ImageListItem, ImageListItemBar, Grid, Box } from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import FetchModel from "../../lib/fetchModelData";


/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
  const user = useParams();
  const author = FetchModel("http://localhost:8000/users/" + user.userId);
  const photos = FetchModel("http://localhost:8000/photos/" + user.userId);
  
  return (
    <Box>
      <Typography>
        Author: {author.first_name} {author.last_name}
      </Typography>
      <Typography>
        Picture took in: {author.location}
      </Typography>
      <ImageList gap={8}>
        {photos.map((item) => (
          <ImageListItem>
            <ImageListItemBar position="below" title={`${item.date_time}`}/>
            <img
              src={`${process.env.PUBLIC_URL}/images/${item.file_name}`}
              alt={item.file_name}
            />
            {item.comments ? (item.comments.map((cmt) => (
              <Grid>
                {/* <Avatar src="/broken-image.jpg"></Avatar> */}
                <Typography variant="subtitle2"> {`${cmt.user.last_name}: `} </Typography>
                <Typography> {cmt.comment} </Typography>
              </Grid>
            ))
            ) : null}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default UserPhotos;
