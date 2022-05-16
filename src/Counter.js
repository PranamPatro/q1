import React, { useState } from 'react';



export default function Counter() {
const [score, setScore] = useState(0);

const increment1 = () => {
  console.log("test1",score)
  setScore(s => {
    console.log("s",s)
    return s + 1
  });
  }
  
  

const increment= () => {
  console.log("test", score)
setScore(score + 1);
}



return (
<>
{console.log("ui",score)}
<button onClick={() => setScore(0)}>reset</button>
<button onClick={() => {
increment()
increment()
}}>+2</button>
<button onClick={() => {
increment1();
increment1();
}}>+2</button>
<h1>Score: {score}</h1>
</>
)
}