import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
comments:any;
data:any;

  constructor(private commentService:CommentService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCommentsData();
  }

  // get comment by id
  getCommentsData() {
    this.commentService.getComment().subscribe(res => {
      console.log(res);
      this.comments = res;
    });
  }

// delete comment
  deleteComment(id: any) {
    if (confirm ('Are you sure you want to delete this comment?') == true) {
    this.commentService.deleteComment(id).subscribe(res => {
      this.data = res;
      this.toastr.error(JSON.stringify('Comment deleted'));
      this.getCommentsData();
    
    });
    
  }
  }}
