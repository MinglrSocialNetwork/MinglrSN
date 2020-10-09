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
              private friendService: FriendService,
              private router: Router) { }
           
  currentUser: any;

  ngOnInit(): void {
    

    this.friendService.getFriends(1).subscribe(
      data => {
        this.friendNumber = data.length;
      }
    )
  //this.postService.getPosts().subscribe(data => {
    //for(let item of data) {
      //if(item["userID"] == this.currentUser['userId']) {
        //this.postNumber++;
        //console.log(data);
      //}
    //}
  //});
  //console.log(this.currentUser);
}



//Needs to call details from user bean.
  name = "Ric";
  postNumber;
  friendNumber;
  aboutMeText = "Down to earth dubstep mountain biking Game of Thrones. Recently moved back I have a crush on watching a movie hiking going to shows, Murakami the simple things in life Family Guy if you're down to actually meet at some point my phone, my friends, the internet. On The Road making people laugh Sunday funday optimistic I'm just a regular guy I know I listed more";

  // Should go to object made in adding() 
  friendId = 34;
  // Should go to object made in adding(); this.currentUser.userID
  userID = 2;
  adding(){
    console.log("Button works!");

    this.friendService.addFriend(this.userID,this.friendId); //The "3" needs to pull the user's userID for that specific page.
  }

  editProfile(){
    this.userService.getUser().subscribe(data => {
      this.currentUser = data;
      console.log(data);
      console.log(this.currentUser);
    });
    
    //this.userService.logout().subscribe();
    //this.router.navigateByUrl('/login');
    //Generate a text field that will update
    //the src address on the profile pic
    //giving an option to change user image.
    //Generate a text field that will apply the new value to
    //the aboutMeText.
  }
}
