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

  currentUser: Object = {
    'username': 'javyduty',
    'userId': 12
  }


  postList: Object[] = [];
  

  @ViewChild('textPostForm') textPostForm: any;

  
  constructor(private postService: PostService) { }


  ngOnInit(): void {
    this.loadPosts();
  }
  
  
  onSubmit(){
    if(this.textPostForm.valid){

      // let postDate: number = Date.now();
      // this.textPostForm.value.date = postDate;
      // this.textPostForm.value.username = this.currentUser['username'];
      this.textPostForm.value.userID = this.currentUser['userId'];
      this.textPostForm.value.upvote = 0;
      this.textPostForm.value.downvote = 0;
      this.textPostForm.value.image = null; 
      this.textPostForm.value.imageExtension = null;
      this.postService.createTextPost(this.textPostForm.value).subscribe();
      this.textPostForm.reset();
    }
    setTimeout(() => this.loadPosts(), 300);
  }

  deletePost(post: any){
    this.postService.deletePost(post).subscribe();

    const deletedPost = this.postList.find(x => x["id"] === post["id"]);
    this.postList.splice(this.postList.indexOf(deletedPost), 1);
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((data) => 
    {
      if (data.length > 0) {
        for (let item of data) {
          this.postList.unshift(item);
        }
      }
    })
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

}

