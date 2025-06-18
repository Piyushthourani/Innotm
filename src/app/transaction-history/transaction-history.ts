import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Myservice, TransactionDetails } from '../myservice';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-transaction-history',
  imports: [CommonModule, TableModule],
  providers: [Myservice],
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.css'
})
export class TransactionHistory implements OnInit {
    transactions = new Array<TransactionDetails>();
    userNumber: any;
    

    constructor(private myservice: Myservice) {}

  ngOnInit() {
    this.userNumber = sessionStorage.getItem('number');
    this.fetchTransactionHistory();
  }

  fetchTransactionHistory() {
    this.myservice.getTransactionHistory(this.userNumber).subscribe(data => {
      this.transactions = data.result;
      console.log(data.response);
      console.log(data.result);
    });
  }

  deleteTransaction(transactionId: number) {
    this.myservice.deleteTransactionById(transactionId).subscribe(data => {
      console.log(data.response);
      this.fetchTransactionHistory(); // Refresh the transaction history after deletion
    });
  }

  deleteAllTransactions() {
    this.myservice.deleteAllTransactions(this.userNumber).subscribe(data => {
      console.log(data.response);
      this.fetchTransactionHistory(); // Refresh the transaction history after deletion
    });
  }
}
