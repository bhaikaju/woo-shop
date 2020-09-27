import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThankyouPage } from './thankyou.page';

const routes: Routes = [
  {
    path: '',
    component: ThankyouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThankyouPageRoutingModule {}
