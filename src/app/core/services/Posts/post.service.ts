import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private _HttpClient = inject(HttpClient);
  private getHeaders() {
  return {
    headers: {
      token: localStorage.getItem('token') ?? ''
    }
  };
}

GetAllPosts():Observable<any>{
  return this._HttpClient.get(`${environment.baseURL}/posts`, this.getHeaders())
}

CreatPost(data:FormData):Observable<any>{
  return this._HttpClient.post(`${environment.baseURL}/posts`, data, this.getHeaders())
}
}
