import axios from 'axios';
import { useState } from 'react';
//===============================================================================
export default function fileDropDown (props){
    const dropDwn = async(event) =>{
        event.preventDefault();
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
    }


//========================================================================================
return(
    //div that contains the dropdown
    <div >

    </div>

    )

}