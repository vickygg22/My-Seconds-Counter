import React from "react";
import { useState, useEffect } from "react";

const SecondsCounter = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      setInterval(() => {
          setCount(previousCount => previousCount + 1);
      }, 1000);
    }, []);
    
    return (
      <div className="mainContainer">
        <div><i className="far fa-clock"></i></div>
        <div>{Math.floor(count/100000)%10}</div>
        <div>{Math.floor(count/10000)%10}</div>
        <div>{Math.floor(count/1000)%10}</div>
        <div>{Math.floor(count/100)%10}</div>
        <div>{Math.floor(count/10)%10}</div>
        <div>{Math.floor(count/1)%10}</div>
      </div>

    )
  };
  
  export default SecondsCounter;