import { useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css'
//================================================================================================
export default function FileDelete(props) {
  const [fileName, setFileName] = useState(null);
  //handle the submitted form once subimtted
  const handleDelete = async (event) => {
    event.preventDefault();
    const formData = new FormData;
    formData.append("fileName", fileName);
    try {
      console.log("attempting to delete")
      console.log(fileName.name);
      const response = await axios({
        method: "delete",
        url: `http://localhost:8080/Uploadedfiles/${fileName.name}`,
        data: formData
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileSelect = (event) => {
    setFileName(event.target.files[0]);
  };

  //==================================================================================================
  return (
    <div>
    <form onSubmit={handleDelete} encType="multipart/form-data">
      <label>Choose File to Delete   </label>
      <input type="file" onChange={handleFileSelect} />
      <input type="submit" name="Delete"/>
    </form>
    </div>
  );
}


//passes in the file NAME as the endpoint, which corresponds to the delete method in the backend.
//the backend searches for the file with the same name
//the delete method deletes the file.