import React from "react";
import Login from "./Login";

var isLoggedIn = false;
var currentTime = new Date().getHours();
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {currentTime < 6 && <h1>What are are you doing awake?</h1>}
      {isLoggedIn ? <h1>Hello</h1> :
        <Login />} */}
      <Login userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
