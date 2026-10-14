import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Captures } from './captures/captures';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'captures', component: Captures},
  { path: 'aboutus', component: About},
];
