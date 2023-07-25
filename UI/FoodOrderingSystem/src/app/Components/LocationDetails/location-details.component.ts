import { Component, Input } from "@angular/core";
import { LocationDetailsModel } from "src/app/Models/location-details.model";

@Component({
    selector: 'location-details-component',
    templateUrl: 'location-details.component.html'
})

export class LocationDetailsComponent{
    @Input() locationDetails: LocationDetailsModel = new LocationDetailsModel;
}