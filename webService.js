const express = require('express');
const { useParams } = require('react-router-dom');

const port = 8000;

const app = express();

const models = require("./src/modelData/models").models;

app.listen(port, (error) =>{
    if(error)
        return  console.log(`Error: ${error}`);
    else return console.log(`Server is listening on port ${port}`);
})

// app.get('/', (request, response) => {
//     console.log(`Hello World`);
//     // console.log(request);
//     response.json({msg:"Hello world", msg1 : "hieuuu"});
// })

app.get('/user/:userId', (re, res) => {
    const userId = re.params.userId;
    const info = models.userModel(userId);
    console.log(userId);
    if (info === null){
        res.send("Page not found");
    }
    else {
        res.send(info);
    }
})