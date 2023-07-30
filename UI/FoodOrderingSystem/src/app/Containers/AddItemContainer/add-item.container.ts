import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CheckoutItemModel } from "src/app/Models/checkout-item.model";
import { getMenuItemsState } from "src/app/state/menu-checkout.reducer";

@Component({
    selector: 'add-item-container',
    templateUrl: 'add-item.container.html'
})

export class AddItemContainer implements OnInit{
    
    constructor(private store: Store<any>){}

    checkoutItems: CheckoutItemModel[] = [];

    ngOnInit(): void {
        // console.log("hi from checkout container");
        // console.log(this.checkoutItems);
        // console.log(this.checkoutItems.length);
        // this.store.select(getMenuItemsState).subscribe({
        //     next: (x) => {
        //         console.log("listening for updates"),
        //         this.checkoutItems = x
        //     },
        //     error: (err) => console.log(err),
        //     complete: () => console.log("Complete")
        // });
        this.store.select(getMenuItemsState).subscribe(x => {
                console.log("listening for updates"),
                this.checkoutItems = x
        });
    }
}