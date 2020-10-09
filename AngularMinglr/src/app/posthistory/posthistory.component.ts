import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-posthistory',
  templateUrl: './posthistory.component.html',
  styleUrls: ['./posthistory.component.css']
})
export class PosthistoryComponent implements OnInit {
  
  
  currentUser: Object = {
    'userId': 12 //This will hold current session userID.
  }

  post = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
     for(let item of data) {
        if(item["userID"] == this.currentUser['userId']) {
          this.post.push(item);
        }
     }
    });
  }

}
