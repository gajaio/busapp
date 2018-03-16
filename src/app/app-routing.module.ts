import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusSearchComponent } from './bus-search/bus-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: BusSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
