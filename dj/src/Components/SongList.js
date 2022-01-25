import { useState } from 'react';
import axios from "axios"
export default function SongList(props){
//======================================================
//set the inital state of the list as zero
const [listLength, setListLength] = useState(0)
//use axios GET method to get each file in Uploadefiles
const listHandler = async (event) =>{
    event.preventDefault();
    try{
        const response = await axios({
            method: "get",
            url: {/* the GET method in app.js */},
        });
    }catch(error){
        console.log(error)
    }
};
//======================================================
    return(
        <div>
            
        </div>
    )
    
}