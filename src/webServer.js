const models = require("../src/modelData/models").models;
const express = require('express'); // Importing express module 
const cors = require('cors');
  
const app = express(); // Creating an express object 

const port = 8000;  // Setting an port for this application 

app.use(cors());
  
// Starting server using listen function 
app.listen(port, function (err) { 
    if(err){ 
        console.log("Error while starting server"); 
    } 
    else{ 
        console.log("Server has been started at " + port); 
   } 
}) 

app.get('/check_health', function (request,response) {
    response.send("Web healthy");
})

app.get('/test/info', function (request, response) {
    const info = models.schemaInfo()

    if (info.length === 0) {
      response.status(500).send('Missing SchemaInfo');
      return;
    }
    response.status(200).send(info);
});
  


app.get('/users/:userId', function (request, response) {
    const userId = request.params.userId;
    const info = models.userModel(userId);
    
    if (info === null) {
        response.status(404).json({ message: "User not found"});
    }
    else {
        response.status(200).send(info);
    }
})

app.get('/photos/:userId', function (request, response) {
    const userId = request.params.userId;
    const info = models.photoOfUserModel(userId);
    
    if (info === null) {
        response.status(404).json({ message: "Photo not found"});
    }
    else {
        response.status(200).send(info);
    }
})

app.get('/userlist', function (request, response) {
    const info = models.userListModel();
    
    if (info === null) {
        response.status(404).json({ message: "Photo not found"});
    }
    else {
        response.status(200).send(info);
    }
})

