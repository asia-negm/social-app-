import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from '../../../core/services/Auth/auth.service';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService){}
    resMassage:string  ='';



  registerForm: FormGroup = new FormGroup({
    name :new FormControl(null , [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Z][a-z]{2,}(?:\s[A-Z][a-z]{2,}){0,3}$/)
    ]),
    username:new FormControl(null , [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Z][a-z]{2,}(?:\s[A-Z][a-z]{2,}){0,3}$/)
    ]),
    email: new FormControl(null , [Validators.email , Validators.required]),
    dataOfBirth: new FormControl(null ,Validators.required),
    gender: new FormControl(null , [Validators.required , Validators.pattern((/^(?:male|female)$/))]),
    password:new FormControl(null , [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
    ]),
  }, { validators: this.comfirmPassword });
  comfirmPassword(g: AbstractControl){
  return  g.get('password')?.value === g.get('rePassword')?.value ? null : {missmatch: true}
  }
  register(){
    console.log(this.registerForm.value)
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      this._AuthService.SignUp(this.registerForm.value).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{
          console.log(err)
          this.resMassage = err.error.massage
        }
      })
    }
  }
}

