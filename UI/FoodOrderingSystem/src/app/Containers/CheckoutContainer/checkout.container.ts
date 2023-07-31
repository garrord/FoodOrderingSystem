import { Component, OnDestroy, OnInit } from "@angular/core"
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { CheckoutItemModel } from "src/app/Models/checkout-item.model";
import { AppState, getMenuItemsState } from "src/app/state/menu-checkout.reducer";
import { updateCheckoutCart } from "src/app/state/menu-items.actions";

@Component({
    selector: 'checkout-container',
    templateUrl: 'checkout.container.html'
})

export class CheckoutContainer implements OnInit, OnDestroy{

    constructor(private store: Store<AppState>){}

    selectedMenuItems: CheckoutItemModel[] = [];
    checkoutItems: CheckoutItemModel[] = [];
    subscription!: Subscription;
    myInfoFormIsValid:boolean = false;
    totalPrice:number = 0;

    ngOnInit():void{
        this.subscription = this.store.select(getMenuItemsState).subscribe(x => {
            this.selectedMenuItems = x
            this.checkoutItems = this.sortItems(this.selectedMenuItems);
        });
    }

    ngOnDestroy(): void {
        if (this.subscription){
            this.subscription.unsubscribe();
        }
    }   

    sortItems(items: CheckoutItemModel[]){
        let arr: CheckoutItemModel[] = []
        items.forEach(x => {
            let item = arr.find(i => i.name == x.name);
            if (!item){
                arr.push({
                    name: x.name,
                    quantity: x.quantity,
                    message: x.message,
                    individualPrice: x.individualPrice
                })
            }
            else{
                item.quantity += x.quantity
            }
        })
        this.getTotalPrice(arr);
        return arr;
    }

    getTotalPrice(items: CheckoutItemModel[]){
        this.totalPrice = 0;
        items.forEach(x => {
            this.totalPrice += x.individualPrice * x.quantity
        });
    }

    validateMyInfoForm(isValid: boolean){
        this.myInfoFormIsValid = isValid;
        console.log(this.myInfoFormIsValid);
    }

    updateCheckoutItems(updatedCheckoutItems:CheckoutItemModel[]){
        this.store.dispatch(updateCheckoutCart({ items: updatedCheckoutItems }));
    }

    placeOrder(){
        
    }
}