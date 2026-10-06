import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from '../../../core/services/Auth/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}
    resMassage:string  ='';



  registerForm: FormGroup = new FormGroup({
    name :new FormControl(null , [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Z][a-z]{2,}(?:\s[A-Z][a-z]{2,}){0,3}$/)
    ]),
    username:new FormControl(null , [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]{2,29}$/)
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
    ]),
  }, { validators: this.comfirmPassword });
  comfirmPassword(g: AbstractControl){
  // return  g.get('password')?.value === g.get('rePassword')?.value ? null : {missmatch: true}
  const password = g.get('password')?.value;
  const rePassword = g.get('rePassword')?.value;
  if (password !== rePassword && rePassword !== ''){
    g.get('rePassword')?.setErrors({ missmatch: true })

    return { missmatch:true }
  }else {
    return null ;
  }
  }
  register(){
    if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }
    console.log(this.registerForm.value)
    console.log(this.registerForm.errors)
    if(this.registerForm.valid){
      this._AuthService.SignUp(this.registerForm.value).subscribe({
        next:(res)=>{
          if(res.success){
            setTimeout(() =>{
              this._Router.navigate(['/login'])

            },1000)
          }
        },
        error:(err)=>{
          console.log(err)
          this.resMassage = err.error.message
        }
      })
    }
    console.log('byeee')
  }


}

