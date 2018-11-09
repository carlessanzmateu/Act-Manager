import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './views/home/home.module#HomePageModule'
  },
  {
    path: 'rehearsals',
    loadChildren: './views/rehearsals/rehearsals.module#RehearsalsPageModule'
  },
  {
    path: 'acts',
    loadChildren: './views/acts/acts.module#ActsPageModule'
  },
  {
    path: 'rehearsal/:id',
    loadChildren: './views/rehearsal-detail/rehearsal-detail.module#RehearsalDetailPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
