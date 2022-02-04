import ReactAudioPlayer from "react-audio-player";
import React from 'react';
import {useState, useEffect} from 'react';
import SongList from "./SongList";
import axios from 'axios';
export default function AudioPlayer(props) {
//===================================================================================================================
    //set the inital state of the name as null
    const [songName, setSongName] = useState("");
    //this function is linked to the GET request,
    const handleRetrieve = async (event) =>{
        //prevent the page from reloading
        event.preventDefault();
        //set the formData
        const formData = new FormData();
        formData.append("songName", songName);
        console.log("formdata appended");
        try{
            const res = await axios({
                method: "get",
                url: `http://localhost:8080/Uploadedfiles/${songName}`,
                data: formData
            });
            console.log("RESPONSE");
            console.log(res.data)
            console.log(typeof res.data)
        }catch(error){
            console.log(error)
        }
    };
    const handleNameSelect = (event) =>{
        setSongName(event.target.files[0].name);
    };
//=================================================================================================================================
    return (
    // ReactAudioPlayer
      <div className="music-container">
        <ReactAudioPlayer
        controls={true}
        src={`http://localhost:8080/Uploadedfiles/${songName}`}/>
      {/* FORM============================================== */}
          <form onSubmit={handleRetrieve} encType="multipart/form-data">
            <label>Choose a song to play</label>
            <input type="file"  onChange={handleNameSelect}/>
          </form>
        <SongList/>





          
      </div>
      
    );
  }

  