import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Myservice {

  constructor(private http:HttpClient) { }

  masterapiurl= "https://skytm-api.azurewebsites.net"

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
    return this.http.get<any>(this.masterapiurl + "/api/Users/balance/" + phoneNumber);
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

