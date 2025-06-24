import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  constructor(private router: Router) {}

  @Input() isAdmin: boolean = false;
  @Output() loginEvent= new EventEmitter<string>();

  send(val:any){
    this.loginEvent.emit(val);  
  }
    logout() {
        sessionStorage.removeItem("isloggedin");
        sessionStorage.removeItem("number");
        sessionStorage.removeItem("isadmin");
        this.router.navigate(['/login'], { replaceUrl: true });
        this.send(false);
        // window.location.reload();
        // alert("You have been logged out successfully!");
        
    } 
}
