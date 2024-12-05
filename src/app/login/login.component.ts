import { Component } from '@angular/core';

import {jwtDecode} from 'jwt-decode';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { Router } from '@angular/router';

import { UserService } from '../service/userService/user.service';

import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { CommonModule } from '@angular/common';

import { error, log } from 'console';
import { routes } from '../app.routes';
import { subscribe } from 'diagnostics_channel';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatButtonModule, MatDividerModule, MatIconModule,CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService:UserService,private router: Router){}

  imgPath : string='assets/google-img.png';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl =new FormControl('',[Validators.required,Validators.minLength(8)])

  matcher = new MyErrorStateMatcher();

  routeToRegistraion(){
    this.router.navigate(['register']);
  }

  // LogIn(){
  //   // if(localStorage.getItem("token")!=null){
  //   //   this.router.navigate(['dashboard']);
  //   // }
    
  //   if (this.emailFormControl.valid && this.passwordFormControl.valid) {
  //     let reData={
  //       email: this.emailFormControl.value,
  //       password: this.passwordFormControl.value
  //     }
      
  //     this.userService.LogIn(reData).subscribe((res:any)=>{
  //       var jwtToken=res.Data;
  //       console.log(res);
  //       localStorage.setItem("token",res.Data);
  //       sessionStorage.setItem("token",res.Data);

  //       try{
          
  //         const decodedToken: any = jwtDecode(jwtToken);
  //         const userId = decodedToken.sub;
  //         const username = decodedToken.name;

  //         localStorage.setItem("username",username);
  //         localStorage.setItem("userId",userId);
  //       }catch(error){
  //         console.error('Invalid Token:', error);
  //       }
        
  //       this.router.navigate(['dashboard']);
        
        
  //     },(error)=>{
  //       console.error('Login failed',error)
  //     })
      
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  LogIn(){
    if(this.emailFormControl.valid && this.passwordFormControl.valid){
      const reData = {
        email: this.emailFormControl.value,
        password: this.passwordFormControl.value,
      };

      this.userService.LogIn(reData).subscribe((res:any)=>{
        if (res.success && res.data){
          try{
            const jwtToken = res.data; // Extract the token
            console.log('JWT Token:', jwtToken);

            const decodedToken: any = jwtDecode(jwtToken);
            console.log('Decoded Token:', decodedToken);

            const userId = decodedToken.sub || '';
            const username = decodedToken.name || '';

            localStorage.setItem("username", username);
            localStorage.setItem("userId", userId);
            localStorage.setItem("token", jwtToken); // Store the token for future use

            this.router.navigate(['dashboard']);
          } catch(error){
            console.error('Invalid Token', error);
          }
        }else{
          console.error('Login failed:', res.message);
        }
      },
    (error)=>{
      console.error('Error during login:', error);
    });
    }else{
      console.log('Form is invalid');
    }
  }
}
