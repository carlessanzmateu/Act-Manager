import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ActsPage } from './acts.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActsPage
      }
    ])
  ],
  declarations: [ActsPage]
})
export class ActsPageModule {}
