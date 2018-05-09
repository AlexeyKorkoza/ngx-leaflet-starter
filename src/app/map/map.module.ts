import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {TypeModule} from '../type/type.module'

import {MapComponent} from './map.component';
import {RouterModule} from "@angular/router";

const mapRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: MapComponent,
    }
]);

@NgModule({

    imports: [
        CommonModule,
        mapRouting,
        TypeModule
    ],

    declarations: [
        MapComponent
    ]

})

export class MapModule {
}