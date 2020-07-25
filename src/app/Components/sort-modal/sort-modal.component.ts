import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-sort-modal',
    templateUrl: './sort-modal.component.html',
    styleUrls: ['./sort-modal.component.scss'],
})
export class SortModalComponent implements OnInit {
    radioValue: string;


    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
        this.radioValue = localStorage.getItem('radio') || 'title-desc';
    }

    closeModal() {
        this.modalController.dismiss(null, 'cancel').then();
    }

    radioChanged(ev: any) {
        this.radioValue = ev.target.value;
        localStorage.setItem('radio', this.radioValue);
        this.modalController.dismiss(this.radioValue, 'sort').then();
    }
}
