import React, { useState } from "react";
import { UserRequests } from "../../../services/axiosRepo";
function CreateUserInputs() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const requester = new UserRequests();
  function sendFormData(values) {
    const res = requester.createUser(values);
    console.log(res)
  }
  function handleNameChange(event) {
    console.log(event.target.value);
    setname(event.target.value);
  }
  function handleEmailChange(event) {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  return (
    <form onSubmit={sendFormData({ name, email, password })}>
      <label>
        Name:{" "}
        <input
          type="text"
          className="loginInput"
          id="username"
          onChange={(e) => handleNameChange(e)}
          placeholder="username"
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="text"
          className="loginInput"
          id="email"
          onChange={(e) => handleEmailChange(e)}
          placeholder="email"
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          className="loginInput"
          id="password"
          onChange={(e) => handlePasswordChange(e)}
          placeholder="password"
        />
      </label>
      <button type="submit"> Criar</button>
    </form>
  );
}

export default CreateUserInputs;
