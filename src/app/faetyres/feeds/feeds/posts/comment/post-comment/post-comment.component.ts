import { Component, inject, input, OnInit , signal} from '@angular/core';
import { CommentAndRepliesService } from '../../../../../../core/services/CommentAndReplies/comment-and-replies.service';
import { IComment } from '../../../../../../core/models/icomment.interface';

@Component({
  selector: 'app-post-comment',
  imports: [],
  templateUrl: './post-comment.component.html',
  styleUrl: './post-comment.component.css',
})
export class PostCommentComponent implements OnInit {
  private _CommentAndRepliesSerivce= inject(CommentAndRepliesService)
  postId = input('')
  commentList = signal<IComment[]>([])

  ngOnInit(): void {
    this.getPostComments()
  }
  getPostComments(){
    this._CommentAndRepliesSerivce.getPostComments(this.postId()).subscribe({
      next:(res)=>{
        console.log(res.data.comments)
    this.commentList.set(res.data.comments)

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
