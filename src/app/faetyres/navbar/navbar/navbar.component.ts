import { Component, inject, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/Auth/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent{
  private _AuthService =inject(AuthService)

  flag:InputSignal<boolean> = input.required()





  logOut(){
  this._AuthService.SignOut()
  }

}
