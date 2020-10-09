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
       this.userService.getUser().subscribe(data=>{
      this.currentUser = data;
    })
    this.postService.getPosts().subscribe(data => {
     for(let item of data) {
        if(item.userID == this.currentUser["id"]) {
          this.post.push(item);
        }
     }
    });
  }
  
  ngOnInit(): void {
  }

}
