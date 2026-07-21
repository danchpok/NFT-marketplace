import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Nft {
  title: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-nft-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nft-list.html',
  styleUrl: './nft-list.css'
})
export class NftList {
  nfts: Nft[] = [
    { title: 'Guitar Hero', category: 'Legendary', price: 99, image: 'nft/guitar hero.jpeg' },
    { title: 'Bass Girl Vibes', category: 'Rare', price: 55, image: 'nft/bass ryo.jpeg' },
    { title: 'Drummer Energy', category: 'Common', price: 30, image: 'nft/drum energy.jpeg' },
    { title: 'Keyboard Warrior', category: 'Common', price: 25, image: 'nft/mugi.jpeg' },
    { title: 'yui hirosawa', category: 'Legendary', price: 120, image: 'nft/yui.jpeg' },
    { title: 'After School Band Practice', category: 'Rare', price: 60, image: 'nft/band.jpeg' },
    { title: 'bochi guitar', category: 'Epic', price: 85, image: 'nft/bochi guitar.jpeg' },
    { title: 'yui guitar', category: 'Legendary', price: 150, image: 'nft/yui guitar.jpeg' },
    { title: 'Tea Time ', category: 'Common', price: 20, image: 'nft/k on.jpeg' },
    { title: 'solo', category: 'Epic', price: 90, image: 'nft/ep 8.jpeg' },
  ];
}