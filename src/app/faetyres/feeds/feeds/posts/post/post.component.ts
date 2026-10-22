import { Component, inject, input } from '@angular/core';
import { PostService } from '../../../../../core/services/Posts/post.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CreatPostComponent } from '../../../../../shared/component/Creat-Post/creat-post/creat-post.component';
import { DatePipe } from '@angular/common';
import { PostCommentComponent } from '../comment/post-comment/post-comment.component';
import { RouterLink } from '@angular/router';
import { IPost } from '../../../../../core/models/Post/ipost.interface';

@Component({
  selector: 'app-post',
  imports: [ReactiveFormsModule, CreatPostComponent, DatePipe, PostCommentComponent, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent  {
  private _PostService =inject(PostService)
  posts =this._PostService.posts;
  post = input.required<IPost>()

  ngOnInit(): void {
  this._PostService.GetAllPosts().subscribe({
    error: (err) => {
      console.log('STATUS:', err.status);
      console.log('URL:', err.url);
      console.log('ERROR:', err.error);
    },
  });
}
}
