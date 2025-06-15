import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {
    receiverPhone: string = '';
    amount: number = 0;

  sendMoney() {
    if (this.receiverPhone && this.amount > 0) {
      // Replace with real service call
      console.log(`Sending ₹${this.amount} to ${this.receiverPhone}`);
      
      alert(`₹${this.amount} sent to ${this.receiverPhone}`);
      
      // Reset form
      this.receiverPhone = '';
      this.amount = 0;
    }
  }
}
