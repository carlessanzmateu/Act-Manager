import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RehearsalDetailPage } from './rehearsal-detail.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RehearsalDetailPage
      }
    ])
  ],
  declarations: [RehearsalDetailPage]
})
export class RehearsalDetailPageModule {}
