import { useState } from "react";
import axios from "axios";
import FileSearch from "./FileSearch";
//================================================================================================
export default function FileUpload(props) {
  //set the initial state of the file
  const [selectedFile, setSelectedFile] = useState(null);
  //handle the submitted form once subimtted
  const handleSubmit = async (event) => {
    console.log("handling")
    //prevent the page from reloading once the form is submitted
    event.preventDefault();
    //create new formData everytime a file is submitted
    const formData = new FormData();
    //insert the file into the formData variable
    formData.append("selectedFile", selectedFile);
    console.log(selectedFile);
    //use axios to handle the file
    try {
      console.log("axios")
      const response = await axios({
        //set as POST method
        method: "post",
        url: "http://localhost:8080",
        data: formData,
        headers: {"Content-Type": "multipart/form-data"}
      });
      console.log("done")
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  //==================================================================================================

  //need to create buttons to activate the file uploader
  //initialize a form to upload files in
  //require express and express-file upload
  return (
    <div>
      <FileSearch/>
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect} />
      <input type="submit" name="Upload File"/>
    </form>
    </div>
  );
  //need to read file and store it in a folder
  // Dropbox project
  //need to select file from folder
  //need to export file to AudioPlayer
}


