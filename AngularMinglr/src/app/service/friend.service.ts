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

  addFriend(pair): Observable<any> {
<<<<<<< HEAD
    return this.friendClient.post("http://localhost:8080/Minglr/friend/addFriend",pair);
  }

}
=======
    console.log(pair);
    return this.friendClient.post("http://localhost:8080/Minglr/friend/addFriend",pair);
  }

}
>>>>>>> 6be9622574883c0ee335c67eb449b4e51b1a178b
