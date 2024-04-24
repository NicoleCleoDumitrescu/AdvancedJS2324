//1. pornim serverul

const express = require('express');
const bodyParser= require('body-parser');
const app = express();
    //Parses the body for POST, PUT, DELETE, etc
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended:true }));
    app.use(express.static(__dirname));
    //GET
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/blog", (req, res) => res.sendfile("./blog.html"));
//POST
app.post("/", (req, res) => res.send("Hello World!"));


    console.log(req.body);
    res.send('Post request'))
// PUT
appendFile.put('/user', function (req, res){
    res.send('PUT request la /user')
})
//DELETE
appendFile.delete('/user', function(req, res){
    res.send('DELETE request la /user')
})
