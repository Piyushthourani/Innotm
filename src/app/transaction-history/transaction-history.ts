import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule],
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.css'
})
export class TransactionHistory implements OnInit {
    transactions: any[] = [];

  ngOnInit() {
    // Replace this with real API call
    this.transactions = [
      {
        date: new Date(),
        type: 'credit',
        amount: 500,
        counterparty: '9876543210'
      },
      {
        date: new Date(),
        type: 'debit',
        amount: 200,
        counterparty: '1234567890'
      }
    ];
  }
}
