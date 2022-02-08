import { useState, useEffect} from 'react';
import axios from "axios";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css'
import ReactAudioPlayer from 'react-audio-player';
export default function SongList(props){
//======================================================
//set the state of the slist as an emptey array
const [slist, setSlist] = useState([])
//initializes emptey array that files will be passed into
const [songName, setSongName] = useState("");
//initializes songName that will be used as src
useEffect(async () =>{
    plsWork();
},[]);
//sets up the function that passes the file into slist from the backend
const plsWork = async (event) =>{
try{
    const response = await axios({
        method: "get",
        url:`http://localhost:8080/Uploadedfiles`
        // data 
    })
    setSlist(response.data)
}catch(error){
    console.log(error);
}
}
//sets the songName as the file which is clicked
const nameHandler = (event) =>{
   event.preventDefault();
   // console.log(typeof songName);
   // console.log(event.target)
   // console.log(event.target.getAttribute('data-info'))
   setSongName(event.target.getAttribute('data-info'));
} 
   //====================================
    return(
        <div>
            <div className="music-container">
                <ReactAudioPlayer
                controls={true}
                src={`${songName}`}/>
            </div>
            <h1>Song List: </h1>
            {/*DropDown Div*/}
                <Dropdown placeholder="select a file" options={slist.map(
                (name, index)=>{
                    return <div>
                        <a
                        key={index}
                        //sets up what exactly will be set as the songName
                        data-info={`http://localhost:8080/Uploadedfiles/${name}`}
                        // value={`http://localhost:8080/Uploadedfiles/${name}`}
                        //sets the function that will be fired once the Dropdown.Item is clicked
                        onClick={nameHandler}>
                            {name}
                        </a> 
                        </div>
                }
            )}/>
        </div>
    )
}
//=============================================================================================================================
