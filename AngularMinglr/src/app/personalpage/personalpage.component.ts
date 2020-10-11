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
           

  postNumber;
  notFriend = true;
  friendList = [];
  
  currentUser = JSON.parse(localStorage.getItem('token'));

  ngOnInit(): void {
  this.postService.getPostsbyId(this.currentUser['id']).subscribe(data => {
    this.postNumber = data.length;
    });
  this.loadValues();
  console.log(this.currentUser['userName']);
  console.log(this.currentUser['id']);
  console.log(this.currentUser);
}



//Needs to call details from user bean.
  name = this.currentUser['firstName']+ " " + this.currentUser['lastName'];;
  username = this.currentUser['userName'];
  
  friendNumber;

  loadValues() {
        this.friendService.getFriends(this.currentUser["id"]).subscribe(
          data => {
            console.log(data);
            this.friendNumber = data.length;
            this.friendList = data;
          }
        )
        // Displaying the Posts number is already done in the ngOnInIt so it's redundant to have it display here
      // this.postService.getPostsbyId(this.currentUser["id"]).subscribe(data => {
      //   this.postNumber = data.length;
      // });
  }

}
