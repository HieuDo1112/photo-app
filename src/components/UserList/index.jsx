import React, { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import "./styles.css";
import { Link } from "react-router-dom";
import FetchModel from "../../lib/fetchModelData";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
  const users = FetchModel("http://localhost:8000/userlist/")
  
  return (
    <div>
      <List component="nav">
        {users.map((item) => (
          <>
            <ListItem>
              <Link to={"/users/" + item._id}>
                <ListItemText primary={item.first_name}/>
              </Link>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
}

export default UserList;
