//set up the express server
const express = require("express");
//set up the fileupload middleware
const expressFileUpload= require("express-fileupload");
//set up the file system
const fs = require("fs");
//set up the application using express
const app = express();
//use the fileupload middleware in the application
app.use(expressFileUpload);

let cache = {}
//set the upload directory to where you want the file to go
const uploadDirectory = __dirname + "/Uploadedfiles";
//set up app.get, the home page
app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/App.js")
})
//set up the files as readable
function read(name){
    fs.readFileSync(uploadDirectory + "/" + name)
}
//set up the post method from ./FileUpload
app.post({/* the form from /FileUpload*/}, (req, res) =>{
    if(req.files) {
        
    }
})
