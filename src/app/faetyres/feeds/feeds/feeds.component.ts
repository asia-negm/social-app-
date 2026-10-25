import { Component, inject } from '@angular/core';
import { LeftSideComponent } from './left-side/left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side/right-side.component';
import { PostComponent } from './posts/post/post.component';
import { CreatPostComponent } from '../../../shared/component/Creat-Post/creat-post/creat-post.component';
import { PostService } from '../../../core/services/Posts/post.service';

@Component({
  selector: 'app-feeds',
  imports: [LeftSideComponent , RightSideComponent , PostComponent , CreatPostComponent],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.css',
})
export class FeedsComponent {
   private postService = inject(PostService);
  posts = this.postService.posts;

  ngOnInit(): void {
    this.postService.GetAllPosts().subscribe({
      error: (err) => console.error(err),
    });
  }
}
