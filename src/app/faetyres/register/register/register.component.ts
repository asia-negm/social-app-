import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthServer } from '../../../core/services/auth/auth.server';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private _AuthServer:AuthServer){}
    resMassage:string  ='';



  registerForm: FormGroup = new FormGroup({
    name :new FormControl(null , [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('/^[A-Z][a-z]{2,}(?:\s[A-Z][a-z]{2,}){0,3}$/')
    ]),
    username:new FormControl(null , [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('/^[A-Z][a-z]{2,}(?:\s[A-Z][a-z]{2,}){0,3}$/')
    ]),
    email: new FormControl(null , [Validators.email , Validators.required]),
    dataOfBirth: new FormGroup(null ,Validators.required),
    gender: new FormControl(null , [Validators.required , Validators.pattern('(/^(?:male|female)$/)')]),
    password:new FormControl(null , [
      Validators.required,
      Validators.pattern('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/')
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.pattern('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/')
    ]),
  }, [Validators: this.comfirmPassword] );
  comfirmPassword(g: AbstractControl){
  return  g.get('password')?.value === g.get('rePassword')?.value ? null : {missmatch: true}
  }
}
