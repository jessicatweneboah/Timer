import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  let [currentTime, setTime] = useState(now);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
