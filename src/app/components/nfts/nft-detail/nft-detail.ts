import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NftService, Nft } from '../../../services/nft.service';

@Component({
  selector: 'app-nft-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nft-detail.html',
  styleUrl: './nft-detail.css'
})
export class NftDetail {
  nft: Nft | undefined;

  constructor(private route: ActivatedRoute, private nftService: NftService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.nft = this.nftService.getById(id);
  }
}