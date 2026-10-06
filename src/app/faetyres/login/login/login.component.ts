import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../../core/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private _AuthService:AuthService){}
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
          console.log(res);
        },
        error:(err) =>{
          this.LoginMassage =err.error.massage

        },
      })
    }
  }
}
