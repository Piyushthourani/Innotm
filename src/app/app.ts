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
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if user is logged in
    this.isloggedIn = Boolean(sessionStorage.getItem("isloggedin"));
  }

  // showSidebar(): boolean {
  //   // Hide sidebar on login or signup pages
  //   return !['', '/login', '/signup'].includes(this.router.url);
  // }
  
  received(event : any){
    this.isloggedIn = event;
    if(!event) {
      this.router.navigate(['/login']);
    }
  }
}
