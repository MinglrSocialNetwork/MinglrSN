import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userClient: HttpClient) { }

  addUser(userFormData): Observable<any>{
    console.log("in addUser");
    console.log(userFormData);
    return this.userClient.post("http://localhost:8080/Minglr/api/createUser", userFormData); 
  }

  getAllUsers(): Observable<any>{
    console.log("in get all users");
    return this.userClient.get("http://localhost:8080/Minglr/api/8661");
  }

}
