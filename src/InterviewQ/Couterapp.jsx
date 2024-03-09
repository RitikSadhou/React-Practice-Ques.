import React, { useState } from 'react'

const Couterapp = () => {
    const [count, setCount] = useState(0)
    const handler=()=>{
        setCount(count+1);
        if(count>10){
           
        }
    }  
    
    return (
    <>
    
   <h1>Couter App</h1>
   <p>couter:{count}</p>
   <button onClick={handler}>increase</button>
 <button onClick={()=>setCount(count-1)}>Decrease</button>
   </>
  
  )
}

export default Couterapp;