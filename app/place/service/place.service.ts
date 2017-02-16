import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Place} from '../model/place';

@Injectable()
export class PlaceService {

    constructor(private http: Http) {
    }

    getAllPlaces(): Observable<Place[]> {
        return this.http.get('app/place/places.json')
            .map((resp: Response)=> {
                return resp.json();
            });
    }
}