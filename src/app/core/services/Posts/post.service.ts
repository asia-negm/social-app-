import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { Observable ,tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import {IPost} from '../../models/Post/ipost.interface'
@Injectable({
  providedIn: 'root',})

export class PostService implements OnInit {
  private _HttpClient = inject(HttpClient);
    private _PostService = inject(PostService);
  posts = signal<IPost[]>([])


  private getHeaders() {
  return {
    headers: {
      token: localStorage.getItem('token') ?? ''
    }
  };
}

GetAllPosts():Observable<any>{
  return this._HttpClient
  .get<any>('${environment.baseURL}/posts' , this.getHeaders())
  .pipe(tap((res) => this.posts.set(res.data.posts)))
}

CreatPost(data:FormData):Observable<any>{
  return this._HttpClient.post<any>(
  `${environment.baseURL}/posts`, data, this.getHeaders()
  )
}
ngOnInit(): void {
  this._PostService.GetAllPosts().subscribe();
}
}
