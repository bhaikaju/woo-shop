import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThankyouPageRoutingModule } from './thankyou-routing.module';

import { ThankyouPage } from './thankyou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThankyouPageRoutingModule
  ],
  declarations: [ThankyouPage]
})
export class ThankyouPageModule {}
