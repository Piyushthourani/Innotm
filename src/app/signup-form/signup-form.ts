import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInfo, Myservice, SignupInfo } from '../myservice';

@Component({
  selector: 'app-signup-form',
  imports: [CommonModule, FormsModule],
  providers: [Myservice],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css'
})
export class SignupForm {

  constructor(private router: Router, private myservice: Myservice) {}
  
  signupModel= new SignupInfo();
  loginModel = new LoginInfo();
  userdata: any;
  userlogin:any;

  showLoginForm: boolean = true;


  onRegisterSubmit() {
    // Logic to register the user goes here...

    this.myservice.signup(this.signupModel).subscribe(data =>{
      console.log(data);
      this.userdata = data.result;
      alert(data.response);
      this.showLoginForm = true;
    })                        
  }

  onLoginSubmit() {
    this.myservice.login(this.loginModel).subscribe(data =>{
      this.userlogin = data.result;
      console.log(data);
      sessionStorage.setItem('number', this.userlogin.phoneNumber);
      alert(data.response);
      this.router.navigate(['/dashboard']);
    });
  }
  switchMode() {
    this.showLoginForm = !this.showLoginForm;
  }
}
