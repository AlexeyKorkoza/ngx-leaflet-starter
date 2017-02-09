import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { TypeModule } from '../type/type.module'

@NgModule({

  imports: [
    CommonModule,
    TypeModule
  ],

  declarations: [
    HeaderComponent
  ],

  exports: [
    HeaderComponent
  ]
})

export class SharedModule {}