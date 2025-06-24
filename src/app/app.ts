import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SignupForm } from './signup-form/signup-form';
import { AddMoney } from './add-money/add-money';
import { Sidebar } from './sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignupForm, RouterLink, Sidebar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'Innotm';
  isloggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if user is logged in
    this.isloggedIn = Boolean(sessionStorage.getItem("isloggedin"));
    this.isAdmin = sessionStorage.getItem("isadmin") === "true";
  }

  // showSidebar(): boolean {
  //   // Hide sidebar on login or signup pages
  //   return !['', '/login', '/signup'].includes(this.router.url);
  // }
  
  received(event : any){
    this.isloggedIn = event.isLoggedIn;
    this.isAdmin = event.isAdmin;
    sessionStorage.setItem("isadmin", this.isAdmin ? "true" : "false");
    if (this.isloggedIn) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
