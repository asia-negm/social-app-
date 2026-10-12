import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../faetyres/navbar/navbar/navbar.component';

@Component({
  selector: 'app-authlayout',
  imports: [RouterOutlet, NavbarComponent, RouterLink, RouterLinkActive],
  templateUrl: './authlayout.component.html',
  styleUrl: './authlayout.component.css',
})
export class AuthlayoutComponent {}
