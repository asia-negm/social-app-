import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AuthService } from '../../../core/services/Auth/auth.service';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private _AuthService =inject(AuthService)

  // flag:WritableSignal<boolean> =  signal

  ngOnInit(): void {
    initFlowbite();
  }

  logOut(){
  this._AuthService
  }

}
