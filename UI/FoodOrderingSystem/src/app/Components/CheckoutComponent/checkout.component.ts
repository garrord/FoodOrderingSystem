import { Component, Input } from "@angular/core";
import { CheckoutCartModel } from "src/app/Models/checkout-cart.model";

@Component({
    selector: 'checkout-component',
    templateUrl: 'checkout.component.html'
})

export class CheckoutComponent{

    @Input() checkoutItems!: CheckoutCartModel;

    ngOnInit():void{
        console.log("hi from checkout component");
    }
}