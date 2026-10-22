import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../../core/models/Post/ipost.interface';
import { PostService } from '../../../core/services/Posts/post.service';
import { PostComponent } from '../../../faetyres/feeds/feeds/posts/post/post.component';
import { PostCommentComponent } from '../../../faetyres/feeds/feeds/posts/comment/post-comment/post-comment.component';

@Component({
  selector: 'app-postdetails',
  imports: [PostComponent, PostCommentComponent],
  templateUrl: './postdetails.component.html',
  styleUrl: './postdetails.component.css',
})
export class PostdetailsComponent  implements OnInit{
  constructor(private _ActivatedRoute :ActivatedRoute){}
  postId:WritableSignal<string> = signal('')

  private _PostService = inject(PostService)
  postData = signal<IPost>({} as IPost)

   ngOnInit(): void {
     this._ActivatedRoute.paramMap.subscribe( (param) =>
      this.postId.set(param.get('id')!)
    )
    this.getPostDetalis()
   }
  getPostDetalis(){
    this._PostService.GetSinlgePost(this.postId()).subscribe({
      next:(res)=>{
        console.log(res);
        this.postData.set(res.data.post)
      },error:(err)=>{
    console.log(err);
        }


    })
  }
}
