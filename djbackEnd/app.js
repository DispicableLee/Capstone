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
//have the app use express.static
//set up the upload directory, where the files will be sent
const uploadDirectory = __dirname + "/Uploadedfiles";
app.use(express.static(uploadDirectory))
//use cors in the application
app.use(cors());
//set the port that the localhost will be using
const port = 8080;

//initialize JSON middleware

//require the FileService
const FileService = require("./FileService");
//Require the FileRouter
const FileRouter = require("./FileRouter");
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
function remove(name){
  fs.unlinkSync(name)
}
//POST Method#1================================================================================================
//inserts a file into uploadDirectory
//For FileUpload.js
app.post("/",(req, res)=>{
  console.log("hi")
  console.log(req);
  write(req.files.selectedFile.name, req.files.selectedFile.data);
  res.send("hi");
})
//GET Method #2=================================================================================================
//Searches uploadDirectory for the specified song
//FOR FileSearch & AudioPlayer
app.get("/Uploadedfiles/:name", (req, res) => {
  console.log("For Audio Player");
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
  //create a buffer from the data
  const buf = Buffer.from(red)
  //convert the buffer to a string
  let buffed = buf.toString("utf-8");

  let src = uploadDirectory + '/' + params
  console.log(src);

  //send the stringed buffer as the response
  res.sendFile(uploadDirectory + '/' + params)
});

//GET Method #3==================================================================================================
//For SongList.js
app.get("/Uploadedfiles", (req, res)=>{
  console.log("Song List");
  console.log(req);
  res.send( fs.readdirSync(__dirname + '/Uploadedfiles'))
})
//DELETE request that removes a specified file from Uploadedfiles
app.delete("/Uploadedfiles/:name", (req,res) =>{  //need to fix endpoint
  console.log(req)
  const params = req.params.name
  console.log("hi")
  fs.unlinkSync(uploadDirectory + '/' + params)
  res.send("done");
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
