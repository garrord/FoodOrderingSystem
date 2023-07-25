import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { LocationDetailsModel } from "../Models/location-details.model";
import { HoursOfOperationModel } from "../Models/hours-of-operation.model";

@Injectable()
export class LocationDetailService{
    
    constructor(private http: HttpClient){}
    baseUrl: string = 'http://localhost:5246/api/locationDetails';

    public GetHoursOfOperation(): Observable<HoursOfOperationModel[]>{
        return this.http.get<HoursOfOperationModel[]>(`${this.baseUrl}/hours`);
    }

    public GetLocationDetails(): Observable<LocationDetailsModel>{
        return this.http.get<LocationDetailsModel>(`${this.baseUrl}/details`);
    }
}