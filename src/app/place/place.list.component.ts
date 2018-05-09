import { Component, OnInit } from '@angular/core';

import { Place } from './model/place';
import { PlaceService } from './service/place.service'

@Component({
    selector: 'place-list',
    templateUrl: 'place.list.component.html'
})

export class PlaceListComponent implements OnInit {

    places: Place[];

    constructor(private placeService: PlaceService) {}

    ngOnInit() {
        this.placeService.getAllPlaces()
            .subscribe(
                places => {
                    this.places = places;
                },
                err => {
                    console.log(err);
                });
    }
}
