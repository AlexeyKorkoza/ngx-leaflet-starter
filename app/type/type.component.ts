import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'type',
  templateUrl: 'app/type/type.component.html'
})

export class TypeComponent {

  ngOnInit() {

  }

  public types:Array<string> = ["Все объекты", "Аптека", "Клуб", "Магазин"];

  private value:any = {};

  public selected(value:any):void {
        console.log('Selected value is: ', value);
  }

}