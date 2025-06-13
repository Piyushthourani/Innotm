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

  onSubmit() {
    alert('Registered Succesfully!!');
  }
}
