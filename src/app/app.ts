import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignupForm } from './signup-form/signup-form';
import { AddMoney } from './add-money/add-money';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignupForm, RouterLink, AddMoney],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Innotm';
}
