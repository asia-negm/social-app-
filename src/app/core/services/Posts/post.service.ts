import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private _HttpClient = inject(HttpClient);
  header:object ={
    headers :{
      token:localStorage.getItem('token')
    }

  }

  GetAllPosts():Observable<any>{
    return this._HttpClient.get(`${environment.baseURL}/psots` ,  this.header)
  }

  CreatPost(data:FormData):Observable<any>{
    return this._HttpClient.post(`${environment.baseURL}/psots` , data , this.header)
  }
}
