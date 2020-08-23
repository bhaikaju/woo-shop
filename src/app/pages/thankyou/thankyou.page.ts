import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProductModel} from "../../models/product-model";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {
  message: string;
  orderId: number;
  products: ProductModel[] = [];
  cartTotal: number;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();

    const state = navigation.extras.state as {
      message: string,
      products: ProductModel[],
      orderId: number,
      total: number
    };
    this.message = state.message;
    this.products = state.products;
    console.log(this.products);
    this.orderId = state.orderId;
    this.cartTotal = state.total;

  }

  ngOnInit() {
  }

}
