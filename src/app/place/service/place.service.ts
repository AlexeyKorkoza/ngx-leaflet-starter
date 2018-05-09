import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Place } from '../model/place';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PlaceService {

    constructor(private http: HttpClient) {}

    getAllPlaces(): Observable<Place[]> {
        return this.http.get<Place[]>('app/place/places.json')
          .pipe(map(data => data));
    }
}
