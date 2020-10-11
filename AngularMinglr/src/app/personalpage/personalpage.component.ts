import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> 6be9622574883c0ee335c67eb449b4e51b1a178b
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
<<<<<<< HEAD
  postNumber;
  notFriend = true;
  friendList = [];
  
=======

>>>>>>> 6be9622574883c0ee335c67eb449b4e51b1a178b
  setUser(user: any){
    this.currentUser = user;
    this.name = this.currentUser.firstName + " " + this.currentUser.lastName;

<<<<<<< HEAD

=======
>>>>>>> 6be9622574883c0ee335c67eb449b4e51b1a178b
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.setUser(data);
      console.log(this.currentUser);
    })
<<<<<<< HEAD
  this.postService.getPostsbyId(this.currentUser["id"]).subscribe(data => {
    this.postNumber = data.length;
    });
=======
  this.postService.getPosts().subscribe(data => {
    for(let item of data) {
      if(item["userID"] == this.currentUser['userId']) {
        this.postNumber++;
        console.log(data);
      }
    }
  });
>>>>>>> 6be9622574883c0ee335c67eb449b4e51b1a178b
  console.log(this.currentUser);
}



//Needs to call details from user bean.
  name = '';
<<<<<<< HEAD
  username = '';
  
  friendNumber;
=======
  postNumber;
  friendNumber;
  aboutMeText = "Down to earth dubstep mountain biking Game of Thrones. Recently moved back I have a crush on watching a movie hiking going to shows, Murakami the simple things in life Family Guy if you're down to actually meet at some point my phone, my friends, the internet. On The Road making people laugh Sunday funday optimistic I'm just a regular guy I know I listed more";
>>>>>>> 6be9622574883c0ee335c67eb449b4e51b1a178b

  // Should go to object made in adding() 
  friendId = 34;
  // Should go to object made in adding(); this.currentUser.userID
  userID = 3;
  adding(){
<<<<<<< HEAD
=======
    console.log("Button works!");
>>>>>>> 6be9622574883c0ee335c67eb449b4e51b1a178b
    const pair = {
      "key": 0,
      "userId": this.userID,
      "friendId": this.friendId
    }
<<<<<<< HEAD
    this.friendService.addFriend(pair).subscribe();
  }

=======

    this.friendService.addFriend(pair).subscribe(); //The "3" needs to pull the user's userID for that specific page.
  }
>>>>>>> 6be9622574883c0ee335c67eb449b4e51b1a178b
  loadValues() {
        this.friendService.getFriends(this.currentUser["id"]).subscribe(
          data => {
            this.friendNumber = data.length;
<<<<<<< HEAD
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
=======
          }
        )
      this.postService.getPostsbyId(this.currentUser["id"]).subscribe(data => {
        this.postNumber = data.length;
      });
  }

  editProfile(){

>>>>>>> 6be9622574883c0ee335c67eb449b4e51b1a178b
  }
}
