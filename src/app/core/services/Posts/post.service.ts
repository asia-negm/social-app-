import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { Observable ,tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import {IPost} from '../../models/Post/ipost.interface'
import { Suggestions } from '../../models/ISuggestions/suggestions.interface';
@Injectable({
  providedIn: 'root',})

export class PostService  {
  private _HttpClient = inject(HttpClient);
  posts = signal<IPost[]>([])
  suggestions = signal<Suggestions[]>([])

  private getHeaders() {
  return {
    headers: {
      token: localStorage.getItem('token') ?? ''
    }
  };
}

GetAllPosts():Observable<any>{
  return this._HttpClient
  .get<any>(`${environment.baseURL}/posts` , this.getHeaders())
  .pipe(tap((res) => this.posts.set(res.data.posts)))
}

CreatPost(data:FormData):Observable<any>{
  return this._HttpClient.post<any>(
  `${environment.baseURL}/posts`, data, this.getHeaders()
  )
}

GetSinlgePost(postId:string):Observable<any>{
  return this._HttpClient.get(`${environment.baseURL}/posts/${postId}`)
}
GetFollowSuggestion():Observable<any>{
  return this._HttpClient
  .get<any>(`${environment.baseURL}/users/suggestions?limit=5 `, this.getHeaders())
  .pipe(tap((res) => this.suggestions.set(res.data.suggestions)))
}
}

