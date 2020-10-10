import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  setUser(user: any){
    this.currentUser = user;
    this.name = this.currentUser.firstName + " " + this.currentUser.lastName;

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.setUser(data);
      console.log(this.currentUser);
    })
  this.postService.getPosts().subscribe(data => {
    for(let item of data) {
      if(item["userID"] == this.currentUser['userId']) {
        this.postNumber++;
        console.log(data);
      }
    }
  });
  console.log(this.currentUser);
}



//Needs to call details from user bean.
  name = '';
  postNumber;
  friendNumber;
  aboutMeText = "Down to earth dubstep mountain biking Game of Thrones. Recently moved back I have a crush on watching a movie hiking going to shows, Murakami the simple things in life Family Guy if you're down to actually meet at some point my phone, my friends, the internet. On The Road making people laugh Sunday funday optimistic I'm just a regular guy I know I listed more";

  // Should go to object made in adding() 
  friendId = 34;
  // Should go to object made in adding(); this.currentUser.userID
  userID = 3;
  adding(){
    console.log("Button works!");
    const pair = {
      "key": 0,
      "userId": this.userID,
      "friendId": this.friendId
    }

    this.friendService.addFriend(pair).subscribe(); //The "3" needs to pull the user's userID for that specific page.
  }
  loadValues() {
        this.friendService.getFriends(this.currentUser["id"]).subscribe(
          data => {
            this.friendNumber = data.length;
          }
        )
      this.postService.getPostsbyId(this.currentUser["id"]).subscribe(data => {
        this.postNumber = data.length;
      });
  }

  editProfile(){

  }
}
