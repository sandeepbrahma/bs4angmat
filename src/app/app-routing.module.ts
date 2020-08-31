import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './pages/me/me.component';


const routes: Routes = [
  { path: '', component: MeComponent },
  // { path: 'contact', component: ContactComponent, runGuardsAndResolvers: 'always', },
  // { path: 'contact', component: ContactComponent },

  // { path: 'profile', component: ProfileComponent },
  {
    path: 'portfolios',
    loadChildren: () => import('./modules/portfolios/portfolios.module').then(m => m.PortfoliosModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  }
  // { path: 'portfolios', loadChildren: '../modules/portfolios/portfolios.module#PortfoliosModule' },

];


//   imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
// imports: [RouterModule.forRoot(routes)],

@NgModule({
  // imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
