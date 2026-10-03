import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginFrom : FormGroup = new FormGroup({
    email : new FormControl ("" , [Validators.required, Validators.email]),
    password: new FormControl ("" , [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/),
      ]),
  })
  login(){
    if(this.loginFrom.valid)
    console.log(this.loginFrom.value)
  }
}
