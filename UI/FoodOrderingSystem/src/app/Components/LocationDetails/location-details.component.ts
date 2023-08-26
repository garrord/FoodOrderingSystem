import { Component, Input } from "@angular/core";
import { LocationDetailsModel } from "../../Models/location-details.model";

@Component({
    selector: 'location-details-component',
    templateUrl: 'location-details.component.html',
    styleUrls:['location-details.component.scss']
})

export class LocationDetailsComponent{
    @Input() locationDetails: LocationDetailsModel = new LocationDetailsModel;
}