import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectModule }  from 'ng2-select';

import { TypeComponent } from './type.component';

@NgModule({

  imports: [
    CommonModule,
    SelectModule
  ],

  declarations: [
    TypeComponent
  ],

  exports: [
    TypeComponent
  ]
})

export class TypeModule {}