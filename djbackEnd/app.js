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

let cache = {};
//set up the upload directory, where the files will be sent
const uploadDirectory = __dirname + "/Uploadedfiles";
//require the FileService
const FileService = require("./FileService");
//Require the FileRouter
const FileRouter = require("./FileRouter");
//initiaize a new FileService and pass in the uploadDirectory as a parameter
const fileService = new FileService(uploadDirectory);
//require the FileRouter that the FileService will be used in
const fileRouter = new FileRouter;






app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//---make a Promise
function read(name) {
  return fs.readFileSync(uploadDirectory + "/" + name,);
}
//---make a Promise
function write(name, data) {
  fs.writeFileSync(uploadDirectory + "/" + name, data);
} 
//inserts a file into uploadDirectory
app.post("/",(req, res)=>{
  console.log(req);
  write(req.files.selectedFile.name, req.files.selectedFile.data)
  res.send("hi");
})
//GET request that retrives a file from the directory and send it back to the front end
app.get("/Uploadedfiles/:name", (req, res) => {
  console.log("GET method: Uploadedfiles/:name")
  const params = req.params.name;
  let red = read(params);
  console.log("reading from folder");
  res.send(red);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
