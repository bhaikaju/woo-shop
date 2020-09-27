import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {ProductResolverService} from "../services/product-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'prod-detail/:id',
    loadChildren: () => import('./prod-detail/prod-detail.module').then( m => m.ProdDetailPageModule),
    resolve: {product: ProductResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
