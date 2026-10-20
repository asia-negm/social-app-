import { Component, inject } from '@angular/core';
import { PostService } from '../../../../../core/services/Posts/post.service';

@Component({
  selector: 'app-right-side',
  imports: [],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.css',
})
export class RightSideComponent {
  private _PostService = inject(PostService);
suggestions = this._PostService.suggestions;

ngOnInit(): void {
  this._PostService.GetFollowSuggestion().subscribe({
    error: (err) => {
      console.log('STATUS:', err.status);
      console.log('ERROR:', err.error);
    }
  });
}
}
