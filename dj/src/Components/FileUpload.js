import './styles/fu.css'
import { useState } from "react";
import axios from "axios";
export default function FileUpload(props) {
  //set the initial state of the file
  const { selectedFile, setSelectedFile } = useState(null);
  //handle the submitted form once subimtted
  const handleSubmit = (event) => {
    //prevent the page from reloading once the form is submitted
    event.preventDefault();
    //create new formData everytime a file is submitted
    const formData = new formData();
    //insert the file into the formData variable
    formData.append("selectedFile", selectedFile);
    //use axios to handle the file
    try {
      const response = await axios({
        //set as POST method
        method: "post",
        //QUESTION: HOW THE FUCK DO I SEND THIS TO THE POST REQUEST, GIVEN THAT THE PORT KEEPS CHANGING?!?!
        url: "http://localhost:3000",
        data: formData
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //need to create buttons to activate the file uploader
  //initialize a form to upload files in
  //require express and express-file upload
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="upload" id="audio" onChange={handleFileSelect} />
      <input type="submit" name="submit"/>
    </form>
  );
  //need to read file and store it in a folder
  // Dropbox project
  //need to select file from folder
  //need to export file to AudioPlayer
}


