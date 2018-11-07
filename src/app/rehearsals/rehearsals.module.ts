import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RehearsalsPage } from './rehearsals.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RehearsalsPage
      }
    ])
  ],
  declarations: [RehearsalsPage]
})
export class RehearsalsPageModule {}
