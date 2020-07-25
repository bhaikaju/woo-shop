import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product-model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-prod-detail',
    templateUrl: './prod-detail.page.html',
    styleUrls: ['./prod-detail.page.scss'],
})
export class ProdDetailPage implements OnInit {
    product: ProductModel;
    showData = false;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.subscribe((data: { product: ProductModel }) => {
            this.product = data.product;
            this.showData = true;
        });
    }

}
