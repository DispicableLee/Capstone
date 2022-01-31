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
            {/* create function "drop" */}

            {slist.map(
                (name, index)=>{
                    return <div>
                        <a key={index} href={"http://localhost:8080/Uploadedfiles" + '/' + `${name}`} >{name}</a> 
                        </div>
                }
            )}
            
            {/* create button that activates "drop" onClick() */}
            <button>Show Downloaded songs</button>
        </div>
    )
}


//=============================================================================================================================
{/* <div class="dropdown">
    <button onclick="show_list()" class="dropbtn">Images</button>
    <div id="image_list" class="dropdown-content">
        <input type="text" placeholder="Search for your images..." id="userInput">
    </div>
</div> */}



// function show_list() {
//     var image_list = document.getElementById("image_list");
//     $.getJSON('http://localhost:8080/list-files', function(data) {
//         data.forEach(function(file) {
//             $(image_list).append($('<a href="http://localhost:8080/uploaded_files/' + file + '">' + file + '</a>'));
//         })
//     });
// }
//==============================================================================================================================



//Need to create a div container for the dropdown