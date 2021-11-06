import React from "react";
import Input from "./Input";
import App from "./App";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.userIsRegistered && <Input type="password" placeholder="Confirm Password" />}
      <button type="submit">{props.userIsRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;