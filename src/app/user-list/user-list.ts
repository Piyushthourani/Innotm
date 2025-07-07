import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users: any[] = [];
  constructor(private myservice: Myservice) {}
  ngOnInit() {
    this.myservice.getUserList().subscribe(data => {
      this.users = data.result;
    });
  }

  trackByUserId(index: number, user: any): any {
    return user.userId;
  }
}
