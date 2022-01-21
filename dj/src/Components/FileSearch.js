import { useState } from "react";
import axios from "axios";
export default function FileSearch(props){
    //set the inital state of the name as null
    const [songName, setSongName] = useState(null);
    //this function is linked to the GET request,
    const handleRetrieve = async (event) =>{
        //prevent the page from reloading
        event.preventDefault();
        //set the formData
        const formData = new FormData();
        formData.append("songName", songName);
        try{
            const response = await axios({
                method: "get",
                url: `http://localhost:8080/Uploadedfiles/:${songName}`,
                data: formData
            });
            console.log(response)
        }catch(error){
            console.log(error)
        }
    };
    const handleNameSelect = (event ) =>{
        setSongName(event.target.name[0]);
    };

    return(
        <form onSubmit={handleRetrieve}>
            <label>List out the songs</label>
            <input type="text" onChange={handleNameSelect}/>
            <input type="submit"/>
        </form>
    )
}