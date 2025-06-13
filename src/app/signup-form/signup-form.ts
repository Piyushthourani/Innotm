import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  imports: [],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css'
})
export class SignupForm {
  signupModel: any ={};

  onSubmit() {
    alert('Registered Succesfully!!');
  }
}
