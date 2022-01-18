//require express then the file uploader
const express = require("express");
const expressFileUpload = require("express-fileupload");
//require cors
const cors = require("cors");
//require the file system
const fs = require("fs");
const FileRouter = require("./FileRouter");
const FileService = require("./FileService");
//activate the application with express
const app = express();
//use the file uploader in the application
app.use(expressFileUpload());
//use cors in the application
app.use(cors());
//set the port that the localhost will be using
const port = 3000;

let cache = {};
//set up the upload directory, where the files will be sent
const uploadDirectory = __dirname + "/djbackEnd/Uploadedfiles";
//require the FileService
const FileService = require("./FileService");
//Require the FileRouter
const FileRouter = require("./FileRouter");
//initiaize a new FileService and pass in the uploadDirectory as a parameter
const FileService = new FileService(uploadDirectory);
//require the FileRouter that the FileService will be used in
const FileRouter = new FileRouter;






app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//---make a Promise
function read(name) {
  return fs.readFileSync(uploadDirectory + "/" + name);
}
//---make a Promise
function write(name, data) {
  fs.writeFileSync(uploadDirectory + "/" + name, data);
} 

app.post("/form", (req, res) => {
  if (req.files) {
    console.log(req.files.file);
    const song = req.files.file;

    // fs.writeFileSync(uploadDirectory + "/" + file.name, file.data);
    write(song.name, song.data);
    // cache[file.name] = fs.readFileSync(uploadDirectory + "/" + file.name);
    cache[song.name] = read(song.name);
    console.log("Cache", cache);
    res.send(
      `To download, go to: http:localhost:${port}/Uploadedfiles/${song.name}`
    );
  }
});

app.get("/Uploadedfiles/:filename", (req, res) => {
  const params = req.params.filename;
  if (cache[params]) {
    res.send(cache[params]);
  } else {
    if (fs.existsSync(uploadDirectory + "/" + params)) {
      cache[params] = read(params);
      res.send(cache[params]);
    }
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
