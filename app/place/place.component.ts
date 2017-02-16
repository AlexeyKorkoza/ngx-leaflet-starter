import {Component, Input} from '@angular/core';

import {Place} from "./model/place";

@Component({
    selector: 'place',
    templateUrl: 'app/place/place.component.html'
})

export class PlaceComponent {

    @Input() place: Place;
}