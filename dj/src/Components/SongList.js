import { useState, useEffect } from 'react';
import axios from "axios"
export default function SongList(props){
//======================================================
//set the state of the slist as an emptey array
    const [slist, setSlist] = useState([])
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
   },[])
          
    
//======================================================
    return(
        <div>
            <h1>Song List: </h1>
            {slist.map(
                (name, index)=>{
                    return <div>
                        <a key={index} href={"http://localhost:8080/Uploadedfiles" + '/' + `${name}`} >{name}</a>
                        
                        </div>
                }
            )}
            
            
        </div>
    )
    
}