import {NgModule, ModuleWithProviders}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {SharedModule} from './shared/shared.module';
import {MapModule} from './map/map.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true});

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        SharedModule,
        MapModule,
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