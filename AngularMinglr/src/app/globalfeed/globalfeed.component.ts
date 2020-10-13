import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostService } from '../service/post.service';
import { FriendService } from '../service/friend.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-globalfeed',
  templateUrl: './globalfeed.component.html',
  styleUrls: ['./globalfeed.component.css']
})

export class GlobalfeedComponent implements OnInit {

  // For testing purposes. Delete later.
  today: number = Date.now();

  postList: Object[] = [];
  createdPost: Object;
  editModePostId: number = -1;
  editedPostText: string;

  selectedFile: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  friendList = [];
  imagePath: any;

  currentUser = JSON.parse(localStorage.getItem('token'));

  @ViewChild('textPostForm') textPostForm: any;

  constructor(private postService: PostService, private friendService:FriendService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadPosts();
    this.setFriendList(this.currentUser['id']);
  }
  
  //Called when user submits a new post
  onSubmit(){
    if(this.textPostForm.valid){
      let postDate: number = Date.now();
      this.textPostForm.value.date = postDate;
      this.textPostForm.value.userID = this.currentUser['id'];
      this.textPostForm.value.upvote = 0;
      this.textPostForm.value.downvote = 0;
      this.textPostForm.value.image = this.selectedFile; 

      //get image info if submitted
      if (this.selectedFile != null){
      //  console.log(this.selectedFile);

        this.textPostForm.value.image = this.selectedFile;

      //  console.log(this.textPostForm.value);

      }

      this.postService.createTextPost(this.textPostForm.value).subscribe();
      setTimeout(() => this.loadPosts(), 300);
    }
    this.textPostForm.reset();
  }

  deletePost(post: any){
    if(confirm("Are you sure you want to delete this post?")){

      //delete post from db
      this.postService.deletePost(post).subscribe();

      //remove post from local post list to update global feed
      const deletedPost = this.postList.find(x => x["id"] === post["id"]);
      this.postList.splice(this.postList.indexOf(deletedPost), 1);
    }
  }

  //Called on startup to load posts from the db
  loadPosts(): void {
    this.postService.getPosts().subscribe((data) => 
    {
      if (data.length > 0) {
        let tempList: Object[] = [];
        for (let item of data) {
          let postId = item["id"];
          this.postService.getUsername(postId).subscribe((user) => 
            item["username"] = user["userName"]
          )
          
          tempList.unshift(item);
        }
        this.postList = tempList;
      }
    })
  }

  editMode(post: Object) {
    this.editModePostId = post['id'];
    this.editedPostText = post['postText'];
  }

  editPost(post: Object) {
    post['postText'] = this.editedPostText;
    this.postService.updatePost(post).subscribe();

    this.editModePostId = -1;
  }

  adding(friendId){
    const pair = {
      "key": 0,
      "userId": this.currentUser["id"],
      "friendId": friendId
    }
   // console.log(friendId);
    this.friendService.addFriend(pair).subscribe();
  }

  setFriendList(userID) {
    this.friendService.getFriends(userID).subscribe(
       data => {
         for(let item of data) {
           this.friendList.push(item);
         }
     //    console.log(this.friendList);
       });
  }

  checkFriend(userID) {
    // Checks if post is from the currentUser
    if( userID == this.currentUser["id"]) {
      return false;
    }
    // Checks list of friends of current user
   for(let item of this.friendList) { 
      if(item[1] == userID) {
          return false;
        }
      } return true;
  }

  cancelEdit() {
    this.editModePostId = -1;
  }

  //Called when a user attaches an image
  onFileChanged($event) {
    //Select File
   // console.log($event.target);
    this.readThis($event.target);
  }
 // Converts the file into Base64
  readThis(inputValue: any) {
    
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
 //   console.log(file);
    myReader.onloadend = (e) => {
      this.selectedFile = myReader.result;
      this.setPicture(this.selectedFile);
    }
    myReader.readAsDataURL(file);
  }

  setPicture(picture) {
    this.selectedFile = picture;
  }

  // Need to import FormsModule in app.module.ts to take advantage of NGFORM
  // BUILT-IN NGFORM METHODS
  // myform.value: It will provide you with the aggregated form value of all the fields used in your <form> tag,
  // myform.valid: It will provide you with a boolean value indicating if the form is valid or not.
  // myform.touched: It will provide you with a boolean value indicating if the user has entered value at least in one field
  // myform.submitted: It will provide you with a boolean value indicating if the form was submitted.
  // myform.reset()
  
  // Access individual form field value:
  // myForm.value.<field>;

  
  proxyObject:Object = {};
  voteList: Object[] = [];

  openComment(postid){
    this.proxyObject['id']=postid;
    this.proxyObject['expanded'] = !this.proxyObject['expanded'];
  }

  canVote(post:any){
    const updatingPost = this.voteList.find(x => x["postId"] == post["id"]);
   // console.log(updatingPost);
    if(updatingPost == undefined){
     // console.log("you can vote");
      return true;
    }else{
      return false;
    }
  }

  upvotePost(post:any){   
    const updatingPost = this.postList.find(x => x["id"] === post["id"]);
    const indexPost = this.postList.indexOf(updatingPost);
    updatingPost['upvote'] = updatingPost['upvote'] + 1;
    this.postList[indexPost] = updatingPost;

    this.postService.upvotePost(updatingPost, this.currentUser['id']).subscribe();
    setTimeout(() => this.loadVotes(), 200);
  }

  downvotePost(post:any){
    const updatingPost = this.postList.find(x => x["id"] === post["id"]);
    const indexPost = this.postList.indexOf(updatingPost);
    updatingPost['downvote'] = updatingPost['downvote'] + 1;
    this.postList[indexPost] = updatingPost;

    this.postService.downvotePost(updatingPost,this.currentUser['id']).subscribe();
    setTimeout(() => this.loadVotes(), 200);
  }

  loadVotes(): void {
    this.postService.getVotes(this.currentUser['id']).subscribe((data) => 
    {
      if (data.length > 0) {
        for (let item of data) {
          this.voteList.unshift(item);
        }
      }
    })
  }
}

