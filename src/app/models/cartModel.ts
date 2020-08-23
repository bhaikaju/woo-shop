import {ProductModel} from "./product-model";

export interface CartModel {
    count: number;
    productData: ProductModel[];
}
