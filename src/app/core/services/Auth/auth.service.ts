import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _HttpClient = inject(HttpClient)
  private  _Router= inject(Router)


  SignOut(){
    this._Router.navigate(['/login']);
    localStorage.removeItem('token')
    localStorage.removeItem('userInof')
  }

  SignUp(formDate:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseURL}/users/signup`, formDate)
  }
  Signin(formDate:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseURL}/users/signin`, formDate)
  }
}



