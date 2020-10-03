
import { DatePipe } from '@angular/common';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-temp',
  templateUrl: './post-temp.component.html',
  styleUrls: ['./post-temp.component.css']
})
export class PostTempComponent implements OnInit {

  // For testing purposes. Delete later.
  today: number = Date.now();

  currentUser: Object = {
    'username': 'javyduty',
    'userId': 12
  }

  postList: Object[] = [
   
  ]

  


  @ViewChild('textPostForm') textPostForm: any;

  
  constructor(private postService: PostService) { }



  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => 
      {
        for (let item of data) {
          console.log(item["postText"]);
          this.postList.push(item);
        }
      }
    )
  }
  
  
  onSubmit(){
    if(this.textPostForm.valid){

      // let postDate: number = Date.now();
      // this.textPostForm.value.date = postDate;

      this.textPostForm.value.userID = this.currentUser['userId'];
      this.textPostForm.value.upvote = 0;
      this.textPostForm.value.downvote = 0;

        this.postService.createTextPost(this.textPostForm.value).subscribe();
        this.textPostForm.reset();
    }
}
  
  
  // Need to import FormsModule in app.module.ts to take advantage of NGFORM
  // BUILT-IN NGFORM METHODS
  // myform.value: It will provides you with the aggregated form value of all the fields used in your <form> tag,
  // myform.valid: It will provides you with a boolean value indicating if the form is valid or not,
  // myform.touched: It will provides you with a boolean value indicating if the user has entered value at least in one field,
  // myform.submitted: It will provides with a boolean value indicating if the form was submitted.
  // myform.resetForm()
  
  // Access individual form field value:
  // myForm.controls['email'].value;

}
