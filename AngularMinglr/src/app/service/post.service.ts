import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = 'http://18.217.93.164:8085/Minglr-BackEnd/post/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'selectAllPosts');
  }


  getUsername(postId: any): Observable<String> {
    return this.http.get<String>(this.url + 'getUsername/' + postId);
  }
  
  getPostsbyId(user): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'getPosts/'+ user);
  }

  createTextPost(data: any){
    return this.http.post(this.url + 'createPost', data);
  }

  deletePost(post: any) {
    let id: number = post["id"];
    return this.http.delete(this.url + 'posts/deletePost/' + id, post);
  }
  
  updatePost(post: any) {
    let id: number = post["id"];
    return this.http.put(this.url + 'posts/updatePost/' + id, post);
 
  }
  
  upvotePost(post: any,userId:any) {
    // console.log(userId);
    return this.http.put(this.url + 'posts/upvotePost/' + userId, post);
  }

  downvotePost(post: any, userId:any) {
    // console.log(userId);
    return this.http.put(this.url + 'posts/downvotePost/' + userId, post);
  }

  getVotes(userId): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'selectAllVotes/'+ userId);
  }
}
