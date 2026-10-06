import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../../core/services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,private _Router:Router){}
  LoginMassage:string = "" ;

  loginFrom : FormGroup = new FormGroup({
    email : new FormControl ("" , [Validators.required, Validators.email]),
    password: new FormControl ("" , [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/),
      ]),
  });

  login(){
    if(this.loginFrom.valid){
      this._AuthService.Signin(this.loginFrom.value).subscribe({
        next:(res)=>{
          if(res.success){
                        localStorage.setItem('socailToken' , res.date.token)

            setTimeout(() =>{
              this._Router.navigate(['/feeds'])

            },1000)
          }
        },
        error:(err) =>{
          this.LoginMassage =err.error.massage

        },
      })
    }
  }
}
