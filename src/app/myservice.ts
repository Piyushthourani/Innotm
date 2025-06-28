import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Myservice {

  constructor(private http:HttpClient) { }

  masterapiurl= "https://localhost:7203"

  signup(signupInfo : SignupInfo){
    return this.http.post<any>( this.masterapiurl+"/api/Auth/signup",signupInfo);
  }
  login(loginInfo : LoginInfo){
    return this.http.post<any>( this.masterapiurl+"/api/Auth/login",loginInfo);
  }

  addMoney(money: any) {
    return this.http.post<any>(this.masterapiurl + "/api/Wallet/add", money);
  }
  getBalance(phoneNumber: string) {
    return this.http.get<any>(this.masterapiurl + "/api/Users/balance?phoneNumber=" + phoneNumber);
  }
  getTransactionHistory(phoneNumber: string) {
    return this.http.get<any>(this.masterapiurl + "/api/Transactions/history?phoneNumber=" + phoneNumber);
  }
  transferMoney(transferInfo: TransferMoneyInfo) {
    return this.http.post<any>(this.masterapiurl + "/api/Transactions/pay", transferInfo);
  }

  getUserList():Observable<any> {
    return this.http.get<any>(this.masterapiurl + "/api/Users/basic-list");
  }

  deleteTransactionById(transactionId: number): Observable<any> {
    return this.http.delete<any>(this.masterapiurl + "/api/Transactions/DeleteTransactionById?Tid=" + transactionId);
  }

  deleteAllTransactions(phoneNumber: string): Observable<any> {
    return this.http.delete<any>(this.masterapiurl + "/api/Transactions/DeleteHistory?phoneNumber=" + phoneNumber);
  }
}

export class SignupInfo{
  email : string | undefined;
  phoneNumber : string | undefined;
  gender : string | undefined;
  username : string | undefined;
  password : string | undefined;
}

export class LoginInfo{
  phoneNumber : string | undefined;
  password : string | undefined;
}

export class AddMoneyInfo {
  phoneNumber: string | undefined;
  amount: number | undefined;
}

export class TransactionDetails {
  transactionId: any;
  userId: number | undefined;
  receiverId: number | undefined;
  receiverName: string | undefined;
  receiverPhoneNumber: string | undefined;
  transactionType: string | undefined;
  transactionDate: Date | undefined;
  initialAmount: number | undefined;
  transferAmount: number | undefined;
}

export class TransferMoneyInfo {
  senderPhoneNumber: string | undefined;
  receiverPhoneNumber: string | undefined;
  amount: number | undefined;
}

export class UserDetails {
  userId: number | undefined;
  username: string | undefined;
  phoneNumber: string | undefined;
}



