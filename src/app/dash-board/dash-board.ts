import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  imports: [CommonModule],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css'
})
export class DashBoard {

  constructor(private router: Router) {}

  addMoney() {
    this.router.navigate(['/add-money']);
  }

  transferMoney() {
    this.router.navigate(['/payment']);
  }
  viewTransactionHistory() {
    this.router.navigate(['/transaction-history']);
  }
}
