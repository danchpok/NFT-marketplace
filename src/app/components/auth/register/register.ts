import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  loginValue = '';
  passwordValue = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onRegister() {
    if (!this.loginValue.trim() || !this.passwordValue.trim()) {
      this.errorMessage = 'Заполните логин и пароль';
      return;
    }
    this.router.navigate(['/create']);
  }
}