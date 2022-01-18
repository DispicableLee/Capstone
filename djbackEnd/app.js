const express = require("express");
const expressFileUpload = require("express-fileupload");
const fs = require("fs");

const app = express();
app.use(expressFileUpload());

const port = 3000;

let cache = {};
const uploadDirectory = __dirname + "/djbackEnd/Uploadedfiles";

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
