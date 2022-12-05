import axios from "axios";

export class UserRequests {
  async createUser(Body) {
    try {
      const response = await axios.post("http://localhost:3001/user", {
      name: Body.name,
      email: Body.email,
      password: Body.password,
    });
    return response  
    } catch (error) {
      console.log(error)
    }
    
  }
}
