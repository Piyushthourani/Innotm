import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-money',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-money.html',
  styleUrl: './add-money.css'
})
export class AddMoney {
  amount: number = 0;

  addMoney() {
    if (this.amount && this.amount > 0) {
      console.log(`Adding ₹${this.amount} to the account`);
      
      this.amount = 0;  // Reset the amount after adding

      alert('Money added successfully!');
    }
  }
}
