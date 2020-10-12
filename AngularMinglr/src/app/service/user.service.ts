import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userClient: HttpClient) { }
  
  getAllUsers(): Observable<any>{
    console.log("in get all users");
    return this.userClient.get("http://18.217.93.164:8085/Minglr-BackEnd/api/8661");
  }
  
  addUser(userFormData): Observable<any>{
    console.log("in addUser");
    console.log(userFormData);
    return this.userClient.post("http://localhost:8085/Minglr/api/createUser", userFormData); 
  }

  loginUser(user): Observable<any>{
    console.log("in login");
    return this.userClient.post<any>("http://localhost:8085/Minglr/sessions/login", user, {withCredentials:true}); 
  }

  logout(): Observable<any>{
    console.log("logged out");
    return this.userClient.post("http://localhost:8085/Minglr/sessions/logout", "");
  }

  getUser(): Observable<any>{
    console.log("inside get user");
    return this.userClient.get("http://localhost:8085/Minglr/sessions/getLoggedInfo",{withCredentials:true});
  }
}
