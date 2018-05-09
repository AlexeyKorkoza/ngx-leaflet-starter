import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Type } from '../model/type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TypeService {

    constructor(private http: HttpClient) {}

    getAllTypes(): Observable<Type[]> {
        return this.http.get<Type[]>('app/type/types.json')
            .pipe(map(data => data));
    }
}
