import React, { useState } from 'react'

const Shufflelist = () => {
    const[items, setitems]=useState(
        ["Apple", "Orange" , "Grapes", "Banana", "Watermelon"]
        
        )
       
        const handleshuffle=()=>{
          const  shuffledItems =[...items];
          for (let i=shuffledItems.length-1;i>=0;i--){
            for(let j=0; j<shuffledItems.length; j++){
              [shuffledItems[i], shuffledItems[j]]= [shuffledItems[j] , shuffledItems[i]];
     }
            }
            setitems(shuffledItems);
        }

  return (
   <>
   <div>
      <h1>List Items</h1>
     <ul>
      {items.map((ele, ind)=>(
        <li key={ind}>{ele}</li>
      ))}
     </ul>
     <button onClick={handleshuffle}>Shuffle</button>
     </div>
   </>
  )
}

export default Shufflelist