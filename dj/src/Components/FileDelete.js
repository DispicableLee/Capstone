import { useState } from "react";
import axios from "axios";
//================================================================================================
export default function FileDelete(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  //handle the submitted form once subimtted
  const handleDelete = async (event) => {
    event.preventDefault();
    //create new formData everytime a file is submitted
    const formData = new FormData();
    //insert the file into the formData variable
    formData.append("selectedFile", selectedFile);
    //use axios to handle the file
    try {
      const response = await axios({
        //set as DELETE method
        method: "delete",
        url: "http://localhost:8080",
        data: formData
      });
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
    <form onSubmit={handleDelete}>
      <input type="file"onChange={handleFileSelect} />
      <input type="submit" name="submit"/>
    </form>
    </div>
  );
  //need to read file and store it in a folder
  // Dropbox project
  //need to select file from folder
  //need to export file to AudioPlayer
}