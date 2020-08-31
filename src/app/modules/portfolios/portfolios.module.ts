import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfoliosComponent } from './portfolios.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '', component: PortfoliosComponent
  }
]
@NgModule({
  declarations: [PortfoliosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]

})
export class PortfoliosModule { }
