import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
              private router: Router) { }
           
  currentUser: any;

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.currentUser = data;
      console.log(data);
      console.log(this.currentUser);
    });
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
  postNumber = 0;
  friendNumber = 5;
  aboutMeText = "Down to earth dubstep mountain biking Game of Thrones. Recently moved back I have a crush on watching a movie hiking going to shows, Murakami the simple things in life Family Guy if you're down to actually meet at some point my phone, my friends, the internet. On The Road making people laugh Sunday funday optimistic I'm just a regular guy I know I listed more";


  adding(){
    console.log("Button works!");
    this.postService.addFriend(3); //The "3" needs to pull the user's userID for that specific page.
  }

  editProfile(){
    
    
    //this.userService.logout().subscribe();
    //this.router.navigateByUrl('/login');
    //Generate a text field that will update
    //the src address on the profile pic
    //giving an option to change user image.
    //Generate a text field that will apply the new value to
    //the aboutMeText.
  }
}
