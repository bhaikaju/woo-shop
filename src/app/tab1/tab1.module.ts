import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {SortModalComponent} from "../Components/sort-modal/sort-modal.component";
import {FilterMenuComponent} from "../Components/filter-menu/filter-menu.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule
    ],
    declarations: [Tab1Page,
        SortModalComponent, FilterMenuComponent
    ]
})
export class Tab1PageModule {
}
