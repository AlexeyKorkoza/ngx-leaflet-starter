import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';

import {TypeModule} from './type/type.module';
import {PlaceModule} from './place/place.module';
import {MapModule} from './map/map.module'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
    imports: [
        BrowserModule,
        MapModule,
        RouterModule,
        TypeModule,
        PlaceModule,
        HttpClientModule,
        rootRouting
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
