import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TypeComponent } from './type.component';

@NgModule({

  imports: [
    CommonModule,
  ],

  declarations: [
    TypeComponent
  ],

  exports: [
    TypeComponent
  ]
})

export class TypeModule {}
