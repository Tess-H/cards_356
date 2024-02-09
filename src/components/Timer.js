//used chatgpt
import React, { useState, useEffect } from 'react';

function Timer({ initialTime = 60, difficulty, onTimeout }) {
    const [time, setTime] = useState(initialTime);
  
    useEffect(() => {
      if (difficulty === "Insane") {
        const timer = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime === 0) {
              clearInterval(timer);
              if (onTimeout) {
                onTimeout();
              }
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
  
        return () => clearInterval(timer);
      }
    }, [difficulty, onTimeout]);
  
    return <div>{time} seconds remaining</div>;
  }
  
  export default Timer;