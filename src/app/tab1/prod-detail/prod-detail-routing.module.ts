import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdDetailPage } from './prod-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProdDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdDetailPageRoutingModule {}
