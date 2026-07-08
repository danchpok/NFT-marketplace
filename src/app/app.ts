import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login'; // Проверь свои пути к файлам
import { Register } from './components/auth/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Если открыли пустой сайт — кинет на логин
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];