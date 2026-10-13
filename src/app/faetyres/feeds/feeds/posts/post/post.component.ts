import { Component, inject } from '@angular/core';
import { PostService } from '../../../../../core/services/Posts/post.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CreatPostComponent } from '../../../../../shared/component/Creat-Post/creat-post/creat-post.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [ReactiveFormsModule , CreatPostComponent ,DatePipe ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent  {
  private _PostService =inject(PostService)
  posts =this._PostService.posts;

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
