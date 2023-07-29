import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CheckoutCartModel } from "src/app/Models/checkout-cart.model";
import { CheckoutMenuState, getMenuItemsState } from "src/app/state/menu-checkout.reducer";

@Component({
    selector: 'checkout-container',
    templateUrl: 'checkout.container.html'
})

export class CheckoutContainer implements OnInit{
    
    constructor(private store: Store<any>){}

    checkoutItems: CheckoutCartModel[] = [];

    ngOnInit(): void {
        console.log("hi from checkout container");
        console.log(this.checkoutItems);
        console.log(this.checkoutItems.length);
        this.store.select(getMenuItemsState).subscribe({
            next: (x) => {
                console.log("listening for updates"),
                this.checkoutItems = x
            },
            error: (err) => console.log(err),
            complete: () => console.log("Complete")
        });
    }
}