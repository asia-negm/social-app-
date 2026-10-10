import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../../../../core/services/Posts/post.service';
import { error } from 'console';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  private _PostService= inject(PostService)

  getAllPosts(){
    this._PostService.GetAllPosts().subscribe({
      next:(res)=>{
        console.log(res)
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
