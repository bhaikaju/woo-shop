import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdDetailPageRoutingModule } from './prod-detail-routing.module';

import { ProdDetailPage } from './prod-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdDetailPageRoutingModule
  ],
  declarations: [ProdDetailPage]
})
export class ProdDetailPageModule {}
