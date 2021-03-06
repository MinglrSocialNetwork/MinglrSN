import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  //base endpoint
  baseUrl = "http://18.217.93.164:8085/Minglr-BackEnd/api/createUser";

  //sample json
  data: any = {
    "id" : 0,
    "userName" : "javy",
    "password" : "controlla",
    "firstName" : "Javy",
    "lastName" : "Santa"
  }

  constructor(private httpCli: HttpClient) { }

  //method for posting a new user
  addUser(): Observable<any> {
    return this.httpCli.post(this.baseUrl, this.data)
  }
  
}
