import { Routes } from '@angular/router';
import { Login } from '../../auth/login/login';
import { Register } from '../../auth/register/register';
import { CreateProfile } from '../../profile/create/create';
import { SidebarLayout } from './sidebar-layout';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'create', component: CreateProfile },
  {
    path: '',
    component: SidebarLayout,
    children: [
      // сюда потом добавим: nfts, profile, my-nfts, create-nft
    ]
  }
];