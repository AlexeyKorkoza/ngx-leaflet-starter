import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {RouterModule} from "@angular/router";

import {PlaceComponent} from './place.component';
import {PlaceListComponent} from './place.list.component';

import {PlaceService} from './service/place.service';

const placeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'places',
        component: PlaceListComponent
    }
]);

@NgModule({

    imports: [
        placeRouting,
        CommonModule
    ],

    declarations: [
        PlaceComponent,
        PlaceListComponent
    ],

    providers: [
        PlaceService
    ]
})

export class PlaceModule {
}