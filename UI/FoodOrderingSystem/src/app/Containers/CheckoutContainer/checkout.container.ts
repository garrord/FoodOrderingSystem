import { Component, OnDestroy, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { CheckoutCartModel } from "src/app/Models/checkout-cart.model";
import { CheckoutItemModel } from "src/app/Models/checkout-item.model";
import { OrderService } from "src/app/Services/place-order.service";
import { AppState, getMenuItemsState } from "src/app/state/menu-checkout.reducer";
import { clearCheckoutCart, updateCheckoutCart } from "src/app/state/menu-items.actions";

@Component({
    selector: 'checkout-container',
    templateUrl: 'checkout.container.html'
})

export class CheckoutContainer implements OnInit, OnDestroy{

    constructor(
        private store: Store<AppState>,
        private orderService: OrderService,
        private router:Router
    ){}

    checkoutCartModel: CheckoutCartModel = new CheckoutCartModel;

    selectedMenuItems: CheckoutItemModel[] = [];
    checkoutItems: CheckoutItemModel[] = [];
    subscription!: Subscription;
    myInfoFormIsValid:boolean = false;
    totalPrice:number = 0;

    ngOnInit():void{
        this.subscription = this.store.select(getMenuItemsState).subscribe(x => {
            this.selectedMenuItems = x,
            this.checkoutItems = this.sortItems(this.selectedMenuItems),
            this.checkoutCartModel.foodItemsOrdered = this.checkoutItems
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
        return arr;
    }

    getTotalPrice(items: CheckoutItemModel[]):number{
        this.totalPrice = 0;
        items.forEach(x => {
            this.totalPrice += x.individualPrice * x.quantity
        });
        return this.totalPrice;
    }

    validateMyInfoForm(myInformation: CheckoutCartModel){
        this.myInfoFormIsValid = true;
    }

    updateCheckoutItems(updatedCheckoutItems:CheckoutItemModel[]){
        this.store.dispatch(updateCheckoutCart({ items: updatedCheckoutItems }));
    }

    placeOrder(){
        let totalPrice = this.getTotalPrice(this.checkoutCartModel.foodItemsOrdered);
        this.checkoutCartModel.totalPrice = totalPrice;
        this.checkoutCartModel.paymentMethod = "Cash";
        this.checkoutCartModel.deliveryMethod = "Pick up";
        console.log(this.checkoutCartModel);
        this.orderService.placeOrder(this.checkoutCartModel).subscribe({
            error: (err) => console.log("error: " + err.message),
            complete: () => {
                this.router.navigateByUrl('/home'),
                this.store.dispatch(clearCheckoutCart())
            }
        });
    }
}