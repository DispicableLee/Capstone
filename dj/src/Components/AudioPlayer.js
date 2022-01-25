import ReactAudioPlayer from "react-audio-player";
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player'
export default function AudioPlayer(props) {
//===================================================================================================================
    //set the inital state of the name as null
    const [songName, setSongName] = useState("");
    const [response, setResponse] = useState("");
    //this function is linked to the GET request,
    const handleRetrieve = async (event) =>{
        //prevent the page from reloading
        event.preventDefault();
        //set the formData
        const formData = new FormData();
        formData.append("songName", songName);
        console.log(songName);
        try{
            const res = await axios({
                method: "get",
                url: `http://localhost:8080/Uploadedfiles/${songName}`,
                data: formData
            });
            console.log("RES",res);
            setResponse(res.data);
        }catch(error){
            console.log(error)
        }
    };
    //response[data][1].data
    const handleNameSelect = (event) =>{
        setSongName(event.target.files[0].name);
    };
//=================================================================================================================================
    return (
      <div className="music-container">
        {/* contains audio player */}
        <div className="music-info">
          {/*contains music information*/}
          <h4 id="title"> {/*name of song goes here*/}hi </h4>
          <div className="progress-container">
            <div className="progress"></div>
          </div>
        </div>
        {/* IMAGE CONTAINER====================================== */}
        <div className="img-cntnr">
          image container
          <img />
        </div>
        {/* REACT AUDIO PLAYER============================================= */}
        <ReactAudioPlayer
        controls
        src={response}/>
        {/* REACT PLAYER=============================================================== */}
        {/* <ReactPlayer
        controls
        url={`/Uploadedfiles/${response}`}
        /> */}
      {/* FORM============================================== */}
          <form onSubmit={handleRetrieve} encType="multipart/form-data">
            <label>Choose a song to play</label>
            <input type="file"  onChange={handleNameSelect}/>
            <input type="submit"/>
          </form>
      </div>
      
    );
  }
  