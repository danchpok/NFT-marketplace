import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginValue = '';
  passwordValue = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginValue === 'Admin' && this.passwordValue === 'admin') {
      this.router.navigate(['/nfts']);
    } else {
      this.errorMessage = 'Неверный логин или пароль';
    }
  }
}