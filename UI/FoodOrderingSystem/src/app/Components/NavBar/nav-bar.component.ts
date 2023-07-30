import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState, getMenuItemsState } from "../../state/menu-checkout.reducer";
import { CheckoutItemModel } from "src/app/Models/checkout-item.model";
import { Subscription } from "rxjs";

@Component({
    selector: 'nav-bar-component',
    templateUrl: 'nav-bar.component.html',
    styleUrls:['nav-bar.component.scss']
})

export class NavBarComponent implements OnInit, OnDestroy {
    constructor(private store: Store<AppState>){}

    items: CheckoutItemModel[] = [];
    subscription!:Subscription;
    quantity: number = 0;

    ngOnInit(): void {
        // this.subscription = this.store.select(getMenuItemsState).subscribe(x => this.items = x);
        this.subscription = this.store.select(getMenuItemsState).subscribe(x => {
            this.items = x,
            this.getTotalItemCount()
        });
    }

    ngOnDestroy():void{
        this.subscription.unsubscribe();
    }

    getTotalItemCount(){
       // if (!this.items){
            this.quantity = 0;
        //}
        // let quantity: number = 0;
        this.items.forEach(x => {
            this.quantity += x.quantity
        })
        console.log(this.quantity);
        //return quantity; 
    }
}