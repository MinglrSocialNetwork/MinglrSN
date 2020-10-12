import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private friendClient: HttpClient) { }

  getFriends(user): Observable<any>{
    return this.friendClient.get("http://18.217.93.164:8085/Minglr-BackEnd/friend/getFriends/"+user);

  }

  addFriend(pair): Observable<any> {
    return this.friendClient.post("http://18.217.93.164:8085/Minglr-BackEnd/friend/addFriend",pair);
  }

}

