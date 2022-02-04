import { useState, useEffect} from 'react';
import axios from "axios";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css'
export default function SongList(props){
//======================================================
//set the state of the slist as an emptey array
    const [slist, setSlist] = useState([])
    const [songName, setSongName] = useState("")
    useEffect(async () =>{
        try{
            const response = await axios({
                method: "get",
                url:"http://localhost:8080/Uploadedfiles"
                // data 
            })
            console.log(response)
            setSlist(response.data)
            // console.log(slist);
        }catch(error){
            console.log(error);
        }
   },[]);
   const clicked = (event) =>{
       event.preventDefault();
       console.log("clicked");
       setSongName()
   }
//======================================================
    return(
        <div>
            <h1>Song List: </h1>
            {/*DropDown Div*/}
                <Dropdown placeholder="select a file" options={slist.map(
                (name, index)=>{
                    return <div>
                        <a 
                        key={index} 
                        href={"http://localhost:8080/Uploadedfiles" + '/' + `${name}`}
                        onClick={clicked}>
                            {name}
                        </a> 
                        </div>
                }
            )}/>


        </div>
    )
}
//=============================================================================================================================
//consider using "react-bootstrap"'s dropdown menu
//"yarn add react-bootstrap"


{/* {slist.map(
                (name, index)=>{
                    return <div>
                        <a key={index} href={"http://localhost:8080/Uploadedfiles" + '/' + `${name}`} >{name}</a> 
                        </div>
                }
            )}*/}