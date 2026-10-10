import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { PostService } from '../../../../../core/services/Posts/post.service';
import { error } from 'console';
import { IPost } from '../../../../../core/models/Post/ipost.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  private _PostService = inject(PostService);
  imgFile!: File;
  imgURl = signal<string | ArrayBuffer | null | undefined>('');
  postBody: FormControl = new FormControl();
  postPrivacy: FormControl = new FormControl('public');

  posts: WritableSignal<IPost[]> = signal([]);

  getAllPosts() {
    this._PostService.GetAllPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.posts.set(res.data.posts);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit(): void {
    this.getAllPosts();
  }
  holdImage(e: Event) {
    let imageFile = e.target as HTMLInputElement;
    if (imageFile.files && imageFile.files.length > 0) {
      console.log(imageFile.files[0]);
      this.imgFile = imageFile.files[0];
      this.readFile();
    }
  }

  readFile() {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.imgFile);
    fileReader.onload = (e) => {
      this.imgURl.set(e.target?.result);
    };
  }
  creatPost(e: SubmitEvent) {
    e.preventDefault();
    let formData = new FormData();
    if (this.imgFile) {
      formData.append('image', this.imgFile);
    }
    if (this.postBody) {
      formData.append('body', this.postBody.value);
    }
    if (this.postPrivacy) {
      formData.append('privacy', this.postPrivacy.value);
    }

    this._PostService.CreatPost(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllPosts();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
