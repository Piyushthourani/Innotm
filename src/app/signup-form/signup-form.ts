import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
export class SignupForm implements OnInit {

  constructor(private router: Router, private myservice: Myservice) {}
  isloggedIn: boolean = false;
  ngOnInit(): void {
      this.isloggedIn = Boolean(sessionStorage.getItem("isloggedin"));
      if(this.isloggedIn) {
        this.router.navigate(['/dashboard']);
      }
  }
  
  signupModel= new SignupInfo();
  loginModel = new LoginInfo();
  userdata: any;
  userlogin:any;

  showLoginForm: boolean = true;
  @Output() loginEvent= new EventEmitter<string>();


  onRegisterSubmit() {
    // Logic to register the user goes here...

    this.myservice.signup(this.signupModel).subscribe(data =>{
      console.log(data);
      this.userdata = data.result;
      alert(data.response);
      this.showLoginForm = true;
    })                        
  }

  send(val:any){
    this.loginEvent.emit(val);  
  }

  onLoginSubmit() {
    this.myservice.login(this.loginModel).subscribe(data =>{
      this.userlogin = data.result;
      console.log(data);
      alert(data.response);
      if(data.response =="Login Successfully !!")
      {
        this.send(true);
        sessionStorage.setItem("isloggedin", "true");
        sessionStorage.setItem('number', this.userlogin.phoneNumber);
        this.router.navigate(['/dashboard']);
      }
      else
      {
        this.send(false);
      }
    });
  }
  switchMode() {
    this.showLoginForm = !this.showLoginForm;
  }
}
