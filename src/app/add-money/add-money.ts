import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddMoneyInfo, Myservice } from '../myservice';

@Component({
  selector: 'app-add-money',
  imports: [CommonModule, FormsModule],
  providers: [Myservice],
  templateUrl: './add-money.html',
  styleUrl: './add-money.css'
})
export class AddMoney implements OnInit {
  userphoneNumber: any;
  addMoneyModel = new AddMoneyInfo();

  constructor(private myservice: Myservice) {}

  ngOnInit() {
    this.userphoneNumber = sessionStorage.getItem('number');
  }

  addMoney() {
    this.addMoneyModel.phoneNumber = this.userphoneNumber;
    this.myservice.addMoney(this.addMoneyModel).subscribe(data => {
      console.log(data);
      alert(data.response);
    });
  
  }
}
