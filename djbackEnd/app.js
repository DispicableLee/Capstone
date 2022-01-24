//require express then the file uploader
const express = require("express");
const expressFileUpload = require("express-fileupload");
//require cors
const cors = require("cors");
//require the file system
const fs = require("fs");
//activate the application with express
const app = express();
//use the file uploader in the application
app.use(expressFileUpload());
//use cors in the application
app.use(cors());
//set the port that the localhost will be using
const port = 8080;


//initialize JSON middleware
app.use(express.json);
app.use(express.urlencoded({extended: false}));
//set up the upload directory, where the files will be sent
const uploadDirectory = __dirname + "/Uploadedfiles";
//require the FileService
const FileService = require("./FileService");
//Require the FileRouter
const FileRouter = require("./FileRouter");
const { Console } = require("console");
//initiaize a new FileService and pass in the uploadDirectory as a parameter
const fileService = new FileService(uploadDirectory);
//require the FileRouter that the FileService will be used in
const fileRouter = new FileRouter;





//GET Method #1
//Initializes the app=======================================================================================
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//read function that reads a file and its data to be used in other method====================================
function read(name) {
  const data = fs.readFileSync(uploadDirectory + "/" + name,);
  return data;
}
//write function that reads a file and its data to be used in other method====================================
function write(name, data) {
  fs.writeFileSync(uploadDirectory + "/" + name, data);
} 
//POST Method#1================================================================================================
//inserts a file into uploadDirectory
//For FileUpload.js
app.post("/",(req, res)=>{
  console.log("hi")
  console.log(req);
  write(req.files.selectedFile.name, req.files.selectedFile.data)
  res.send("hi");
})
//GET Method #2=================================================================================================
//Searches uploadDirectory for the specified song
//FOR FileSearch.js  
app.get("/Uploadedfiles/:name", (req, res) => {
  console.log(req);
  console.log("searching");
  const params = req.params.name;
  console.log(params);
  let red = read(params);
  console.log(red)
  //make an object that stores the name and the stored data
  let dataset = [params, red]
  //send this to the front end with res.send
  console.log(dataset);
  console.log("hi");
  res.send(dataset);
  //red[0][1]
});
//DELETE request that removes a specified file from Uploadedfiles
app.delete("Uploadedfiles/:name", (req,res) =>{
  console.log(req);
  const params = req.params.name
  //remove the file
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
