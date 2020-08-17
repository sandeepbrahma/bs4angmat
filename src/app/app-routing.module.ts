import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './pages/me/me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: '', component: MeComponent },
  // { path: 'contact', component: ContactComponent, runGuardsAndResolvers: 'always', },
  { path: 'contact', component: ContactComponent },

  { path: 'profile', component: ProfileComponent }
];


//   imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
// imports: [RouterModule.forRoot(routes)],

@NgModule({
// imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
