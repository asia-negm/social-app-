import { Component, inject, OnInit, signal } from '@angular/core';

import { ProfileService } from '../../../core/services/profile/profile.service';
import { CreatPostComponent } from '../../../shared/component/Creat-Post/creat-post/creat-post.component';
import { PostComponent } from '../../feeds/feeds/posts/post/post.component';
import { IPost } from '../../../core/models/Post/ipost.interface';
import { PostService } from '../../../core/services/Posts/post.service';

@Component({
  selector: 'app-profile',
  imports: [CreatPostComponent, PostComponent ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  private _ProfileService = inject(ProfileService)
  private _PostService = inject(PostService)
  profile=this._ProfileService.profile;
  myPosts = signal<IPost[]>([])

  ngOnInit(): void {
    this._ProfileService.GetMyProfile().subscribe({
      next:(res) => {
      this.profile.set(res.data.user);

      this.loadMyPosts(res.data.user._id)

      },
      error:(err)=>{
        console.log('Profile request failed:', err);

      }
    })
  }

  loadMyPosts(userId: string):void{
    this._PostService.GetAllPosts().subscribe({
      next:(res) =>{
        this.myPosts.set(
          res.data.posts.filter(
            (post:IPost) => post.user._id === userId
          )
        );
      },
      error:(err)=>{
        console.error('Posts Request Faild :' , err)
      },
    });  }


}
