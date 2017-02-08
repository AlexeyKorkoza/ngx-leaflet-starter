import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SelectModule}  from 'ng2-select';

import {MainComponent}   from './component/Main/main.component';

@NgModule({
    imports: [
        BrowserModule,
        SelectModule
    ],
    declarations: [
        MainComponent
    ],
    bootstrap: [
        MainComponent
    ]
})
export class AppModule {
}