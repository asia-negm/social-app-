import { Component, inject } from '@angular/core';
import { PostService } from '../../../../../core/services/Posts/post.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent  {
  private _PostService =inject(PostService)
  posts =this._PostService.posts;


}
