import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IProfile } from '../../models/profile/iprofile.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
     private _HttpClient = inject(HttpClient);
profile = signal<IProfile | null>(null);

  private getHeaders() {
  return {
    headers: {
      token: localStorage.getItem('token') ?? ''
    }
  };
}

GetMyProfile():Observable<any>{
  return this._HttpClient
  .get<any>(`${environment.baseURL}/users/profile-data` , this.getHeaders())

}
}
