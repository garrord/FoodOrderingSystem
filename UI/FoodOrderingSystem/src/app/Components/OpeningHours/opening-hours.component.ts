import { Component, Input } from "@angular/core";
import { HoursOfOperationModel } from "../../Models/hours-of-operation.model";

@Component({
    selector:'opening-hours-component',
    templateUrl: 'opening-hours.component.html'
})

export class OpeningHoursComponent{
    @Input() hoursOfOperation: HoursOfOperationModel[] = [];
}