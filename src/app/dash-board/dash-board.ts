import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Myservice } from '../myservice';

@Component({
  selector: 'app-dash-board',
  imports: [CommonModule],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css'
})
export class DashBoard implements OnInit {
  balance: number = 0; 
  
userNumber: any;
  constructor(private router: Router, private myservice: Myservice) {}

  ngOnInit(): void {
      this.userNumber = sessionStorage.getItem('number');
      this.fetchBalance();
  }

  fetchBalance() {
    this.myservice.getBalance(this.userNumber).subscribe(data => {
      this.balance = data.result.amount;
      console.log(data.response);
      console.log(data.result);
    });
  }

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
