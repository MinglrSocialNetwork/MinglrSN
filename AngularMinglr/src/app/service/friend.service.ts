import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private friendClient: HttpClient) { }

  getFriends(user): Observable<any>{
    return this.friendClient.get("http://localhost:8080/Minglr/friend/getFriends/"+user);

  }

  addFriend(userID:number , friendID: number): Observable<any> {
    const pair = {
      "key": 0,
      "userId": userID,
      "friend": friendID
    }
    return this.friendClient.post("http://localhost:8080/Minglr/friend/addFriend",pair);
  }

}
