import React, { useState } from 'react'

const ToggleSwitch = () => {

    const[istoogle, settoggle]=useState(false);
   function handlechnage(){
    settoggle(!istoogle);
   }
  return (
   <>
   <h1>Toggle Switch</h1>
   <input type="checkbox" onChange={handlechnage}   ></input>
   <h2>{istoogle ?"on ":"off"}</h2>
   </>
  )
}

export default ToggleSwitch