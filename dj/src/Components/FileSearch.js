import { useState } from "react";
import axios from "axios";
export default function FileSearch(props){
//=============================================================================================================================
    //set the inital state of the name as null
    const [songName, setSongName] = useState("");
    //this function is linked to the GET request,
    const handleRetrieve = async (event) =>{
        //prevent the page from reloading
        event.preventDefault();
        //set the formData
        const formData = new FormData();
        formData.append("songName", songName);
        console.log(songName);
        try{
            const response = await axios({
                method: "get",
                url: `http://localhost:8080/Uploadedfiles/${songName}`,
                data: formData
            });
            console.log(response)
            console.log("hi")
        }catch(error){
            console.log(error)
        }
    };
    const handleNameSelect = (event) =>{
        setSongName(event.currentTarget.value);
    };
//==========================================================================================================================
    return(
        <form onSubmit={handleRetrieve}>
            <label>List out the songs</label>
            <input type="text"  value={songName} onChange={handleNameSelect}/>
            <input type="submit"/>
        </form>
    )
}