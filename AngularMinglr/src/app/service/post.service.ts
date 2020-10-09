import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = 'http://localhost:8080/Minglr/dumbasses/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'selectAllPosts');
  }
  
  createTextPost(data: any){
    return this.http.post(this.url + 'createPost', data);
  }
  
  addFriend(id: number){
    let friendList: number[] = [];
    friendList.push(id);
    console.log("New array is: " + friendList); //Debug Output
  }
}
