import axios from "axios";

export class UserRequests{
  createUser(Body){
    axios.post("http://localhost:3001",{name:Body.name, email: Body.email, password: Body.password})
  }
}
