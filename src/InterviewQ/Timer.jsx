import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(60);
    const[over, setover]=useState('');
    useEffect(()=>{
       const  intervalId = setInterval(() => {
             if(seconds>0){
                setSeconds(seconds-1);
             }
             else{
                setover("Time is up!");
                clearInterval(intervalId);
             }

       },1000)

       return ()=>clearTimeout(intervalId);

    },[seconds]);
  return (
    <>
    
    <h1>Timer:-{seconds} second left</h1>
    <h1>{over}</h1>
    </>
  )
}

export default Timer