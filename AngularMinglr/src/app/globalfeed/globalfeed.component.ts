import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostService } from '../service/post.service';

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

  selectedFile: File = null;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;

  currentUser: Object = {
    'username': 'PrisonMike',
    'id': 28
  }

  @ViewChild('textPostForm') textPostForm: any;


  constructor(private postService: PostService) { }


  ngOnInit(): void {
    this.loadPosts();
  }
  
  //Called when user submits a new post
  onSubmit(){
    if(this.textPostForm.valid){
      let postDate: number = Date.now();
      this.textPostForm.value.date = postDate;
      this.textPostForm.value.userID = this.currentUser['id'];
      this.textPostForm.value.upvote = 0;
      this.textPostForm.value.downvote = 0;
      this.textPostForm.value.image = null; 
      this.textPostForm.value.imageExtension = null;

      //get image info if submitted
      if (this.selectedFile != null){
        //console.log(this.selectedFile);

        this.textPostForm.value.image = this.selectedFile;

        //console.log(this.textPostForm.value.image);
        this.textPostForm.value.imageExtension = this.selectedFile.name;
        //console.log(this.textPostForm.value.imageExtension);

        //console.log(this.textPostForm.value);

        // const uploadImageData = new FormData();
        // uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

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

  cancelEdit() {
    this.editModePostId = -1;
  }

  //Called when a user attaches an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
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

