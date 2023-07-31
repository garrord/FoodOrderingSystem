import { Component, OnDestroy, OnInit } from "@angular/core"
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { CheckoutCartModel } from "src/app/Models/checkout-cart.model";
import { CheckoutItemModel } from "src/app/Models/checkout-item.model";
import { AppState, getMenuItemsState } from "src/app/state/menu-checkout.reducer";

@Component({
    selector: 'checkout-container',
    templateUrl: 'checkout.container.html'
})

export class CheckoutContainer implements OnInit, OnDestroy{

    constructor(private store: Store<AppState>){}

    selectedMenuItems: CheckoutItemModel[] = [];
    checkoutItems!: CheckoutCartModel;
    subscription!: Subscription;
    myInfoFormIsValid:boolean = false;

    ngOnInit():void{
        this.subscription = this.store.select(getMenuItemsState).subscribe(x => this.selectedMenuItems = x);

        if (this.selectedMenuItems){
            this.checkoutItems = this.sortItems(this.selectedMenuItems);
        }
    }

    ngOnDestroy(): void {
        if (this.subscription){
            this.subscription.unsubscribe();
        }
    }   

    sortItems(items: CheckoutItemModel[]):CheckoutCartModel{
        let arr: CheckoutCartModel = {
            items: [],
            totalPrice: 0
        }; 
        items.forEach(x => {
            let item = arr.items.find(i => i.name == x.name);
            if (!item){
                arr.items.push({
                    name: x.name,
                    price: x.quantity * x.price,
                    quantity: x.quantity,
                    message: x.message
                })
            }
            else{
                item.quantity += x.quantity
                item.price += (x.quantity * x.price)
            }
        })
        arr.totalPrice = this.getTotalPrice(arr);
        return arr;
    }

    getTotalPrice(items: CheckoutCartModel):number{
        let total = 0;
        items.items.forEach(x => {
            total += x.price
        });
        return total;
    }

    validateMyInfoForm(isValid: boolean){
        this.myInfoFormIsValid = isValid;
        console.log(this.myInfoFormIsValid);
    }
}