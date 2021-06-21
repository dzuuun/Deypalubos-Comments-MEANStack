import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommentService } from '../service/comment.service';



@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  
  data:any;
  id:any;
  submitted=false;
  

  constructor(private commentService:CommentService, private toastr: ToastrService, private route:ActivatedRoute,  private formBuilder:FormBuilder, private router:Router) { }

  form = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl('')
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getComment();
    this.createForm();
  }
// require user to input name and comment
  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

//initialize form with content of the array
getComment() {
  this.commentService.getCommentById(this.id).subscribe(res => {
    this.data = res;
    this.form = new FormGroup({
      name: new FormControl(this.data.name),
      comment: new FormControl(this.data.comment) 
    })
  })
}

// update comment 
updateComment() {
this.commentService.updateComment(this.id, this.form.value).subscribe(res => {
  this.data = res;
  this.toastr.success(JSON.stringify('Comment updated Successfully'));
  this.router.navigateByUrl('/');
});
}
}
