import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CheckoutCartModel } from "src/app/Models/checkout-cart.model";
import { CheckoutItemModel } from "src/app/Models/checkout-item.model";

@Component({
    selector: 'ordered-items-component',
    templateUrl: 'ordered-items.component.html'
})

export class OrderedItemsComponent implements OnInit{

    @Input() totalPrice: number = 0;
    @Input() checkoutItems!: CheckoutItemModel[];
    @Output() updatedCheckoutItems: EventEmitter<CheckoutItemModel[]> = new EventEmitter<CheckoutItemModel[]>

    quantityChange(){
        this.updatedCheckoutItems.emit(this.checkoutItems);
    }

    ngOnInit(): void {
        console.log(this.checkoutItems)
    }
}