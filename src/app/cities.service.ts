import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class CityService {

    constructor(private http: Http) { }

    getCities() : Observable<any> {
        return this.http.get(environment.citiesURL)
            .map(res =>res.json());

    }

}