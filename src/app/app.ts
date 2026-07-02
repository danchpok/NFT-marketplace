import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/auth/login/login'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login], // 2. Добавляем LoginComponent сюда через запятую
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nftmarket');
}