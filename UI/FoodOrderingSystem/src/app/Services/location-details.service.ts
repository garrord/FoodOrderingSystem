import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { LocationDetails } from "../Models/location-details.model";

@Injectable()
export class LocationDetailService{
    
    constructor(private http: HttpClient){}
    baseUrl: string = 'http://localhost:44312';

    public GetHoursOfOperation(): Observable<string[]>{
        return this.http.get<string[]>(`${this.baseUrl}`);
    }

    public GetLocationDetails(): Observable<LocationDetails>{
        return this.http.get<LocationDetails>(`${this.baseUrl}`);
    }
}