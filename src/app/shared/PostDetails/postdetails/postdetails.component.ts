import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../../core/models/Post/ipost.interface';

@Component({
  selector: 'app-postdetails',
  imports: [],
  templateUrl: './postdetails.component.html',
  styleUrl: './postdetails.component.css',
})
export class PostdetailsComponent  implements OnInit{
  constructor(private _ActivatedRoute :ActivatedRoute){}
  postId:WritableSignal<string> = signal('')
  postData = signal<IPost>({} as IPost)
   ngOnInit(): void {
     this._ActivatedRoute.paramMap.subscribe( (param) =>
      this.postId.set(param.get('id')!)
    )
    // this.getPostDetalis()
   }
  // getPostDetalis(){
  //   this._postService.GetSinglepost(this.postId()).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //       this.postData.set(res.data.post)
  //     }error:(err)=>{
  //   console.log(err);
  //       }
  //   )

  //   }
  // }
}
