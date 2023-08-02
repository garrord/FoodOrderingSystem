import { Component } from "@angular/core";

@Component({
    selector: 'options-component',
    templateUrl: 'options.component.html'
})

export class OptionsComponent{

    delivery:string = '';

    deliverySelected(selection: any){
        console.log(selection.value);
    }
}