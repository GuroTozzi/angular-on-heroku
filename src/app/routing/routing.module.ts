import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';
import {HomeComponent} from '../home/home.component';
import {UserDetailsComponent} from '../user-details/user-details.component';
import {UserEditComponent} from '../user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'footer',
    component: FooterComponent // che componente visualizzare
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // vuol dire che deve coincidere perfettamente con lo spazio, perchè altrimenti potrebbe prendere un altra rotta
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users/:id/edit', // :id --> è un placeholder per dire catturami tutto quello che c'è tra users ed edit.
    component: UserEditComponent,
  },
  {
    path: 'users/:id/show',
    component: UserDetailsComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
