import React from "react";
import { UserRequests } from "../../../services/axiosRepo";
export class CreateUserForm extends React.Component {
  constructor() {
    super();
    this.state = { name: "", email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  sendFormData(values) {
    const requester = new UserRequests();
    requester.createUser(values);
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert("Um nome foi enviado: " + this.state.value);
    this.sendFormData(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleEmailChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handlePasswordChange}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
