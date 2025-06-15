import { Routes, RouterModule } from '@angular/router';

import { SignupForm } from './signup-form/signup-form';
import { AddMoney } from './add-money/add-money';
import { Payment } from './payment/payment';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SignupForm },
  { path: 'signup', component: SignupForm },
  { path: 'add-money', component: AddMoney },
  { path: 'payment', component: Payment },
];
