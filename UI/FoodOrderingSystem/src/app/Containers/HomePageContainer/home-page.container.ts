import { Component, OnInit } from "@angular/core";
import { LocationDetailService } from "../../Services/location-details.service";
import { LocationDetailsModel } from "../../Models/location-details.model";
import { HoursOfOperationModel } from "../../Models/hours-of-operation.model";

@Component({
    selector: 'home-page-container',
    templateUrl: 'home-page.container.html',
    styleUrls:['home-page.container.scss']
})

export class HomePageContainer implements OnInit {

    constructor(private locationDetailsService: LocationDetailService){}

    locationDetails: LocationDetailsModel = new LocationDetailsModel();
    hoursOfOperation: HoursOfOperationModel[] = [];

    ngOnInit(): void {
        this.locationDetailsService.GetLocationDetails().subscribe(x => this.locationDetails = x);
        this.locationDetailsService.GetHoursOfOperation().subscribe(x => this.hoursOfOperation = x);
    }
}