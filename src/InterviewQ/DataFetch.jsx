import React, { useEffect, useState } from 'react'

const DataFetch = () => {
  const[data, setdata]=useState("")

   useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users/1")
   .then((res)=>res.json())
   .then((data)=>setdata(data))
   console.log(data);

   }, [])
   

  return (
 <>
 
 <h1>Datafetching.....</h1>

 <div>
  Name:{data.name}<br/>
  Email:{data.email}
 </div>
 </>


  )
}

export default DataFetch