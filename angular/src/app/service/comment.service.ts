import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  getComment() {
    return this.httpClient.get('http://localhost:3300/comments');
  }

  insertComment(data: any) {
    return this.httpClient.post('http://localhost:3300/comments/', data);

  }

  getCommentById(id: string) {
    return this.httpClient.get('http://localhost:3300/comments/'+id);
  }

  updateComment(id: string, data: any) {
    return this.httpClient.put('http://localhost:3300/comments/'+id, data);
    
  }

  deleteComment(id: string) {
    return this.httpClient.delete('http://localhost:3300/comments/'+id);
 
  }
  }



