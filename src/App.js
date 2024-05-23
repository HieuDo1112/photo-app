import "./App.css";

import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";

const App = () => {
  
    const [userName, setUserName] = useState(null);

    const changeUserName = (userName) =>{
      setUserName(userName)
    }

    return (
      <Router>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Routes>
                <Route path="/" element={<TopBar  />} />
                <Route
                  path="/:page/:userId" element={<TopBar  />}
                />
              </Routes>
              {/* <TopBar {...props} userName="Hello world" /> */}
            </Grid>
            <div className="main-topbar-buffer" />
            <Grid item sm={3}>
              <Paper className="main-grid-item">
                <UserList />
              </Paper>
            </Grid>
            <Grid item sm={9}>
              <Paper className="main-grid-item">
                <Routes>
                  <Route path="/users/:userId" element={<UserDetail handle={changeUserName}  />} />
                  <Route path="/photos/:userId" element={<UserPhotos handle = {changeUserName} />} />
                  <Route path="/users" element={<UserList />} />
                </Routes>
              </Paper>
              
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }


export default App;
