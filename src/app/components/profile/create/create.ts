import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class CreateProfile {
  username = '';
  bio = '';
  maxBioLength = 300;

  constructor(private router: Router) {}

  get symbolsLeft(): number {
    return this.maxBioLength - this.bio.length;
  }

  onCreate() {
    this.router.navigate(['/nfts']);
  }
}