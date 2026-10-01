import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthServer {
  private _HttpClient = inject(HttpClient)

  SignUp(formDate:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseURL}/user/signup`, formDate)
  }
  Signin(formDate:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseURL}/user/signin`, formDate)
  }

}
