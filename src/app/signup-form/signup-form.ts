import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css'
})
export class SignupForm {
  signupModel: any ={};
  loginModel: any = {};

  showLoginForm: boolean = false;


  onRegisterSubmit() {
    // Logic to register the user goes here...

    // Then show the login form
    this.showLoginForm = true;
    alert('Registered Successfully!! Please log in.');
  }

  onLoginSubmit() {
    // Logic to log in the user goes here...

    // For now, just alerting the user
    alert('Logged In Successfully!!');
  }
}
