import React from 'react'
import { useNavigate } from 'react-router-dom';
import pngwing from "./pngwing..png"

const Thanks = () => {
    const nav = useNavigate();

    function backToMain(){
        localStorage.clear();
        nav("/");
    }
  return (
    <>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}> 
        <img src={pngwing} alt="" width="70%"/>
    </div>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center" }}>
        <button onClick={backToMain} style={{borderRadius:"10px", backgroundColor:"black", color:"white", width:"200px", height:"50px"}} >Start Over</button>
    </div>
    </>
  )
}

export default Thanks