import React from "react";
import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;


    // 2- Compute color (optional)
    //let scoreColor = `#f3bc47`;
    let scoreColor = score <= 2 ? "#F3BC47" : score <= 5 ? "#B9C54B" : score <= 7 ? "#C7E755" : "#008000";

    

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };
  const handleInputChange = (e) => {
    const value = Math.min(Math.max(e.target.value,0),10);
    setScore(value);
  }

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={handleInputChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
