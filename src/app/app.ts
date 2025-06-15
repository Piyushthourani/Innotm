import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SignupForm } from './signup-form/signup-form';
import { AddMoney } from './add-money/add-money';
import { Sidebar } from './sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignupForm, RouterLink, AddMoney, Sidebar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Innotm';
  constructor(private router: Router) {}

  showSidebar(): boolean {
    // Hide sidebar on login or signup pages
    return ![ '/login', '/signup'].includes(this.router.url);
  }
}
