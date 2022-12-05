import React from "react";
import { UserRequests } from "../../../services/axiosRepo";
function CreateUserInputs(){
  const requester = new UserRequests()
  function getValues(){
    const email = document.getElementById('email')
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    return {
      username
    }
  }
  return (
    <div id="loginInputContainer">
      <label>Name: <input type="text" className="loginInput" id="username" placeholder="username"/></label>
      <label>Email: <input type="text" className="loginInput" id="email" placeholder="email"/></label>
      <label>Password: <input type="password" className="loginInput" id="password" placeholder="password"/></label>
      <button onClick={requester.createUser()}></button>
    </div>
  )
}

export default CreateUserInputs