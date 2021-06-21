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
    this.getCommentsComment();
  }

  getCommentsComment() {
    this.commentService.getComment().subscribe(res => {
      console.log(res);
      this.comments = res;
    });
  }

  deleteComment(id: any) {
    this.commentService.deleteComment(id).subscribe(res => {
      this.data = res;
      this.toastr.error(JSON.stringify('Comment deleted Successfully'));
      this.getCommentsComment();
    });
    
  }
}
