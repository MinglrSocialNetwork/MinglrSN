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
    return this.userClient.post("http://18.217.93.164:8085/Minglr-BackEnd/api/createUser", userFormData); 
  }

  loginUser(user): Observable<any>{
    console.log("in login");
    return this.userClient.post<any>("http://18.217.93.164:8085/Minglr-BackEnd/sessions/login", user, {withCredentials:true}); 
  }

  logout(): Observable<any>{
    console.log("logged out");
    return this.userClient.post("http://18.217.93.164:8085/Minglr-BackEnd/sessions/logout", "");
  }

  getUser(): Observable<any>{
    console.log("inside get user");
    return this.userClient.get("http://18.217.93.164:8085/Minglr-BackEnd/sessions/getLoggedInfo",{withCredentials:true});
  }
}
