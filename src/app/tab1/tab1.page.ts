import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {ProductModel} from "../models/product-model";
import {LoadingController, ModalController, ToastController} from "@ionic/angular";
import {SortModalComponent} from "../Components/sort-modal/sort-modal.component";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    sliderImages = [
        '/assets/slide1',
        '/assets/slide2',
        '/assets/slide3',
        '/assets/slide4',
        '/assets/slide5'
    ]

    sliderOptions = {
        autoplay: {
            delay: 2000
        },
        loop: true
    }

    listArrayOfProducts: ProductModel[] = [];
    displayedList: ProductModel[] = [];
    currentPage = 1;


    constructor(private productService: ProductService,
                private loadingController: LoadingController,
                private toastController: ToastController,
                private modalController: ModalController) {
    }

    async ngOnInit() {
        const loader = await this.loadingController.create({
            message: 'Getting Products..',
            spinner: "bubbles",
            animated: true
        });
        await loader.present().then();
        this.productService.getAllProducts().subscribe(async (products: ProductModel[]) => {
            await loader.dismiss().then();
            this.listArrayOfProducts = products;
            this.displayedList = [...this.listArrayOfProducts];
        }, async (err) => {
            await loader.dismiss().then();
            console.log(err);
        })

    }

    async loadMoreData(ev: any) {
        const toast = await this.toastController.create({
            message: 'No More Products',
            animated: true,
            duration: 2000,
            buttons: [
                {
                    text: 'Done',
                    role: 'cancel',
                    icon: 'close'
                }
            ]
        });

        if (ev == null) {
            this.currentPage = 1;
        } else {
            this.currentPage++;
            this.productService.getAllProducts(this.currentPage).subscribe(async (prods: ProductModel[]) => {
                this.listArrayOfProducts = this.listArrayOfProducts.concat(prods);
                this.displayedList = [...this.listArrayOfProducts];

                if (ev !== null) {
                    ev.target.complete();
                }

                if (prods.length < 10) {
                    await toast.present().then();
                    ev.target.disabled = true;
                }
            }, (err) => {
                console.log(err);
            });

        }


    }

    loadingSpinner() {
        this.loadingController.create({
            message: "Loading Details..",
            animated: true,
            spinner: "crescent",
            backdropDismiss: false,
            showBackdrop: true
        }).then(el => el.present());
    }

    openModal() {
        this.modalController.create({
            component: SortModalComponent,
            animated: true,
            cssClass: 'sortModal'
        }).then(el => {
            el.present().then();
            return el.onDidDismiss().then(resultData => {
                this.sort({role: resultData.role, data: resultData.data});
            })
        });
    }


    sort(resultData: { role: string, data: any }) {
        const {role, data} = {...resultData};
        if (role === 'cancel') {
            return;
        } else if (role === 'sort') {

            // Check the type of sorting asked by the customer
            if (data === 'title-asc') {
                this.displayedList.sort((a, b) => {
                    const x = a.name.toLowerCase();
                    const y = b.name.toLowerCase();

                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                });
            }

            else if (data === 'title-desc') {
                this.displayedList.sort((a, b) => {
                    const x = a.name.toLowerCase();
                    const y = b.name.toLowerCase();

                    if (x > y) {
                        return -1;
                    }
                    if (x < y) {
                        return 1;
                    }
                    return 0;
                });
            }

            else if (data === 'price-asc') {
                this.displayedList.sort((a, b) => {
                    // @ts-ignore
                    return a.price - b.price;   // Low To High
                });
            }

            else if (data === 'price-desc') {
                this.displayedList.sort((a, b) => {
                    // @ts-ignore
                    return b.price - a.price;   // High To Low
                });
            }
        }


    }
}
