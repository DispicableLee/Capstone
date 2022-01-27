import { useState } from 'react';
import axios from "axios"
export default function SongList(props){
//======================================================
//set the state of the slist as an emptey array
    const [slist, setSlist] = useState([])
    const handleList = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios({
                method: "get",
                url:"/Uploadedfiles"
                // data 
            })
            setSlist(slist.unshift(response))
            
        }catch(error){
            console.log(error);
        }
    }      
    
//======================================================
    return(
        <div></div>
    )
    
}



// <div class="dropdown">
      //<button onClick ="song_List()"></button>
      // <div id="slist"> </div>
//</div>

  //function song_List()=>{
      // var s_list = document.getElementById("slist");
      // axios.get({/* URL goes here*/}, function(data){
          // data.forEach(function(file){
            // %slist.append(response)
          // })
      // })
 // }