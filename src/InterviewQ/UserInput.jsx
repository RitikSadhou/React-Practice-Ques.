import React, { useState } from 'react'

const UserInput = () => {
    const[input, setinput]=useState("")
  return (
    <>
    <h1>User Input</h1>
    <input type="text" placeholder='Write something..' onChange={(e)=>setinput(e.target.value)} />
     <h4>Input value:{input}</h4>
    </>
  )
}

export default UserInput