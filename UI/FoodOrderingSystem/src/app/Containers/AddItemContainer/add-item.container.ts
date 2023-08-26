import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CheckoutItemModel } from "../../Models/checkout-item.model";
import { getMenuItemsState } from "../../state/menu-checkout.reducer";

@Component({
    selector: 'add-item-container',
    templateUrl: 'add-item.container.html'
})

export class AddItemContainer implements OnInit{
    
    constructor(private store: Store<any>){}

    checkoutItems: CheckoutItemModel[] = [];

    ngOnInit(): void {
        this.store.select(getMenuItemsState).subscribe(x => {
                this.checkoutItems = x
        });
    }
}