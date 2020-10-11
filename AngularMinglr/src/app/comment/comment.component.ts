import { ElementRef, HostListener,Input, Component, OnInit, ViewChild } from '@angular/core';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments:Object[] = [];
  //Giph search
  top_10_gifs  = [];
  @Input() parentPostId: number; // decorate the property with @Input()
  @ViewChild('textCommentForm') textCommentForm: any;

  constructor(private commentService:CommentService,public element:ElementRef) { }

  onSubmit(){
    if(this.textCommentForm.valid){
      this.textCommentForm.value.postId = this.parentPostId;
      this.commentService.createComment(this.textCommentForm.value).subscribe();
      this.textCommentForm.reset();
    }
    setTimeout(() => this.loadComments(), 200);
  }

 
  loadComments(): void {
    this.commentService.getComments().subscribe((data) => 
    {
      this.comments = [];
    //   console.log(data);
        if (data.length > 0) {
          for (let item of data) {
            this.comments.unshift(item);
          }
        }
       //console.log(data);
    })
   // console.log("Finished loading comments");
  }
  
  //Everything HostListner,onInput, and adjust is used to perform textarea autosize
  @HostListener('input',['$event.target'])
  onInput(textarea:HTMLTextAreaElement):void{
      this.adjust();
  }

  adjust():void{
    const textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
    textArea.style.maxHeight = '200px';
  }

  ngOnInit():void {
    this.loadComments();
    //console.log(this.parentPostId);
  }

  performSearch(searchTem: string){
    this.commentService.gifSearch(searchTem).subscribe((data) => 
      {
        this.top_10_gifs  = data['results'];
    })
  }

  addImage(imageurl){
    this.textCommentForm.value.postId = this.parentPostId;
    this.textCommentForm.value.gifUrl = imageurl;
    this.textCommentForm.value.commentText = null;
    this.commentService.createComment(this.textCommentForm.value).subscribe();
    this.top_10_gifs =[];
    this.textCommentForm.reset();
    setTimeout(() => this.loadComments(), 200);
  }
}
