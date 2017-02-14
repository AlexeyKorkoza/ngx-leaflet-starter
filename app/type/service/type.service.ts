import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Type} from '../model/type';

@Injectable()
export class TypeService {

    constructor(private http: Http) {
    }

    getAllTypes(): Observable<Type[]> {
        return this.http.get('app/type/types.json')
            .map((resp: Response)=> {
                let data = resp.json();
                let types = [];
                for (let index in data) {
                    types.push(data[index].name_type);
                }
                return types;
            });
    }
}