import { Component, OnInit } from '@angular/core';
import { FriendService } from '../service/friend.service';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-personalpage',
  templateUrl: './personalpage.component.html',
  styleUrls: ['./personalpage.component.css']
})
export class PersonalpageComponent implements OnInit {
  

  constructor(private postService: PostService,
              private userService: UserService,
              private friendService: FriendService) { }
           
  currentUser: any = {};
  postNumber;
  notFriend = true;
  friendList = [];
  
  setUser(user: any){
    this.currentUser = user;
    this.name = this.currentUser.firstName + " " + this.currentUser.lastName;


  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.setUser(data);
      console.log(this.currentUser);
    })
  this.postService.getPostsbyId(this.currentUser["id"]).subscribe(data => {
    this.postNumber = data.length;
    });
  console.log(this.currentUser);
}



//Needs to call details from user bean.
  name = '';
  username = '';
  
  friendNumber;

  // Should go to object made in adding() 
  friendId = 34;
  // Should go to object made in adding(); this.currentUser.userID
  userID = 28;
  adding(){
    const pair = {
      "key": 0,
      "userId": this.userID,
      "friendId": this.friendId
    }
    this.friendService.addFriend(pair).subscribe();
  }

  loadValues() {
        this.friendService.getFriends(this.currentUser["id"]).subscribe(
          data => {
            this.friendNumber = data.length;
            this.friendList = data;
          }
        )
        // Displaying the Posts number is already done in the ngOnInIt so it's redundant to have it display here
      // this.postService.getPostsbyId(this.currentUser["id"]).subscribe(data => {
      //   this.postNumber = data.length;
      // });
  }

  editProfile(){
      this.notFriend = !this.notFriend; 
  }
}
