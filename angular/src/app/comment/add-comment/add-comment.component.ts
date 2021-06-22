import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/service/comment.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
form!:FormGroup;
submitted=false;
data: any;

  constructor(private commentService:CommentService, private formBuilder:FormBuilder, private toastr:ToastrService, private router:Router ) { }

  ngOnInit(): void {
    this.createForm();
  }
/* input field should not be empty **/
  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  // insert comment to db
  insertComment() {
    this.submitted=true;
    if(this.form.invalid) {
      return;
    }
    this.commentService.insertComment(this.form.value).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify('Comment Added'));
      this.router.navigateByUrl('/');
    });
  }


}
