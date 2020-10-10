import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = 'http://localhost:8080/Minglr/post/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'selectAllPosts');
  }

  getUsername(postId: any): Observable<String> {
    return this.http.get<String>(this.url + 'getUsername/' + postId);
  }
  
  createTextPost(data: any){
    return this.http.post(this.url + 'createPost', data);
  }

  deletePost(post: any) {
    let id: number = post["id"];
    return this.http.delete(this.url + 'posts/deletePost/' + id, post);
  }
  
}
