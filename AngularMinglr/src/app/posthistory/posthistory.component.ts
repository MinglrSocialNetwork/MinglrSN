import { Component, OnInit } from '@angular/core';
import { PersonalpageComponent } from '../personalpage/personalpage.component';
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
              private userService: UserService,
              private personalpage: PersonalpageComponent) { }

  loadPosts() {

    this.postService.getPostsbyId(this.currentUser["id"]).subscribe(data => {
     for(let item of data) {
          this.post.push(item);
     }
    });
  }
  
  ngOnInit(): void {
         this.userService.getUser().subscribe(data=>{
      this.currentUser = data;
    })
  }

}
