import { Injectable } from '@angular/core';

export interface Nft {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class NftService {
  nfts: Nft[] = [
    { id: 1, title: 'Guitar Hero', category: 'Legendary', price: 99, image: 'nft/guitar hero.jpeg' },
    { id: 2, title: 'Bass Girl Vibes', category: 'Rare', price: 55, image: 'nft/bass ryo.jpeg' },
    { id: 3, title: 'Drummer Energy', category: 'Common', price: 30, image: 'nft/drum energy.jpeg' },
    { id: 4, title: 'Keyboard Warrior', category: 'Common', price: 25, image: 'nft/mugi.jpeg' },
    { id: 5, title: 'yui hirosawa', category: 'Legendary', price: 120, image: 'nft/yui.jpeg' },
    { id: 6, title: 'After School Band Practice', category: 'Rare', price: 60, image: 'nft/band.jpeg' },
    { id: 7, title: 'bochi guitar', category: 'Epic', price: 85, image: 'nft/bochi guitar.jpeg' },
    { id: 8, title: 'yui guitar', category: 'Legendary', price: 150, image: 'nft/yui guitar.jpeg' },
    { id: 9, title: 'Tea Time', category: 'Common', price: 20, image: 'nft/k on.jpeg' },
    { id: 10, title: 'solo', category: 'Epic', price: 90, image: 'nft/ep 8.jpeg' },
  ];

  getById(id: number): Nft | undefined {
    return this.nfts.find(n => n.id === id);
  }
}