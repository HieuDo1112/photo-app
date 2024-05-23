import {
  Divider,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import React from "react";


import { Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () { 
    const users = models.userListModel();
    return (
      <div>
        <List component="nav">
          {users.map((item) => (
            <>
              <ListItem>
              <Link to={"http://localhost:3000/users/" + item._id} > <ListItemText primary={item.first_name}/> </Link>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        
      </div>
    );
}

export default UserList;
