import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink], // Все импорты аккуратно собраны тут
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {}