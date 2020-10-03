import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

url: string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getPosts(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }
  
  createTextPost(url: string, data: any){
    return this.http.post(url, data);
  }

  
}

