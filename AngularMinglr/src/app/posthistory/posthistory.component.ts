import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-posthistory',
  templateUrl: './posthistory.component.html',
  styleUrls: ['./posthistory.component.css']
})
export class PosthistoryComponent implements OnInit {
  
  
  currentUser;

  post = [];
  constructor(private postService: PostService,
              private userService: UserService) { }

  loadPosts() {
        this.postService.getPostsbyId(this.currentUser.id).subscribe(data => {
     for(let item of data) {
          this.post.push(item);
     }
     console.log(data);
    });
  }
  

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("token"));
    console.log(this.currentUser);
    this.loadPosts();
  }
}
