import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { CreateProfile } from './components/profile/create/create';
import { SidebarLayout } from './components/layout/sidebar-layout/sidebar-layout';
import { NftList } from './components/nfts/nft-list/nft-list';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: '',
    component: SidebarLayout,
    children: [
      { path: 'nfts', component: NftList },
      { path: 'create', component: CreateProfile },
    ]
  }
];