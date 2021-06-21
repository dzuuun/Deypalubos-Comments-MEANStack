import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';


const appRoutes:Routes = [
  {
    path: '', component:CommentComponent
  },
  {
    path: 'add-comment', component:AddCommentComponent
  },
  {
    path: 'edit/:id', component:EditCommentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    NavbarComponent,
    AddCommentComponent,
    EditCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'danger'}),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
