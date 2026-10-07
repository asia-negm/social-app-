import { Component } from '@angular/core';
import { LeftSideComponent } from './left-side/left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side/right-side.component';
import { PostComponent } from './posts/post/post.component';

@Component({
  selector: 'app-feeds',
  imports: [LeftSideComponent , RightSideComponent , PostComponent],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.css',
})
export class FeedsComponent {}
