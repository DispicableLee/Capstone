import ReactAudioPlayer from "react-audio-player";
import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
export default function AudioPlayer(props) {
//===================================================================================================================
    //set the inital state of the name as null
    const [songName, setSongName] = useState("");
    const [response, setResponse] = useState("");
    const [setPlay, setSetPlay] = useState(false);
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
            setResponse(res.data);
            console.log(typeof res.data)
            setSetPlay(true);
        }catch(error){
            console.log(error)
        }
    };
    const handleNameSelect = (event) =>{
        setSongName(event.target.files[0].name);
    };
    //Event Listener that sets {react-audio-player} autoplay to "true" after {handleRetrieve} is fired.
    //useRef Function===================================================================================
//=================================================================================================================================
    return (
      <div className="music-container">
        {/* REACT AUDIO PLAYER============================================= */}
        <ReactAudioPlayer
        controls={true}
        autoPlay={setPlay}
        src={`http://localhost:8080/Uploadedfiles/${songName}`}/>
        {/* Javascript Audio PLAYER===================================================== */}
      {/* FORM============================================== */}
          <form onSubmit={handleRetrieve} encType="multipart/form-data">
            <label>Choose a song to play</label>
            <input type="file"  onChange={handleNameSelect}/>
            <input type="submit"/>
          </form>
      </div>
      
    );
  }

  