import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { PostService } from '../../../../../core/services/Posts/post.service';
import { error } from 'console';
import { IPost } from '../../../../../core/models/Post/ipost.interface';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  private _PostService= inject(PostService)

  posts:WritableSignal<IPost[]> = signal([])

  getAllPosts(){
    this._PostService.GetAllPosts().subscribe({
      next:(res)=>{
        console.log(res)
        this.posts.set(res.data.posts)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
    this.getAllPosts()

  }
}
