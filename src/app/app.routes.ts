import { Routes, RouterModule } from '@angular/router';

import { SignupForm } from './signup-form/signup-form';
import { AddMoney } from './add-money/add-money';
import { Payment } from './payment/payment';
import { DashBoard } from './dash-board/dash-board';
import { TransactionHistory } from './transaction-history/transaction-history';
import { UserList } from './user-list/user-list';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SignupForm },
  { path: 'signup', component: SignupForm },
  { path: 'add-money', component: AddMoney },
  { path: 'payment', component: Payment },
  { path: 'dashboard', component: DashBoard },
  { path: 'transaction-history', component: TransactionHistory },
  { path: 'user-list', component: UserList }

];
