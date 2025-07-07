import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Myservice, TransferMoneyInfo, UserDetails } from '../myservice';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  providers:[Myservice],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {
    
  transferMoneyModel = new TransferMoneyInfo();
  userPhoneNumber:any;

  constructor(private myservice:Myservice){}

  userDetails = new UserDetails();
  userlist :any;

  ngOnInit(): void {
    this.userPhoneNumber = sessionStorage.getItem('number');
    this.getAllUsers();
  }
  getAllUsers(){
    this.myservice.getUserList().subscribe(data => {
      this.userlist = data.result;
    });
  }

  sendMoney(){
    this.transferMoneyModel.senderPhoneNumber = this.userPhoneNumber;
    this.myservice.transferMoney(this.transferMoneyModel).subscribe(data => {
      console.log(data.result);
      console.log(data.response);
      alert(data.response);
    });
  }

  setQuickAmount(amount: number) {
    this.transferMoneyModel.amount = amount;
  }
}
