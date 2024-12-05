import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/userService/user.service';
@Component({
  selector: 'app-registraion',
  imports: [MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './registraion.component.html',
  styleUrl: './registraion.component.css'
})
export class RegistraionComponent {
  constructor(private userService: UserService){
  }
  imgPath : string='assets/google-img.png';

  name: string = '';
  email: string = '';
  password: string = '';

  currentStep: 'name' | 'email' | 'password' = 'name';

  // Get step message
  getCurrentStepMessage(): string {
    switch(this.currentStep) {
      case 'name': return 'Enter your name';
      case 'email': return 'Enter your email';
      case 'password': return 'Create a password';
      default: return '';
    }
  }

  // Name step next
  onNextName() {
    if (this.name.trim()) {
      this.currentStep = 'email';
    }
  }

  // Email step next
  onNextEmail() {
    // You can add additional email validation if needed
    this.currentStep = 'password';
  }

   // Go back to previous step
   goBack() {
    switch(this.currentStep) {
      case 'email':
        this.currentStep = 'name';
        break;
      case 'password':
        this.currentStep = 'email';
        break;
    }
  }

  // Final submit
  onSubmit() {
    // Log registration details
    let reData={
      name:this.name,
      email: this.email,
      passwordHash: this.password
    }

    this.userService.Registertion(reData).subscribe((res:any)=>{
      console.log(res)
    })

  }
}

