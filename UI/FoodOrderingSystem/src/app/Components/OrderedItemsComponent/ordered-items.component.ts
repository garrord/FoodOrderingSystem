import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { CheckoutItemModel } from "../../Models/checkout-item.model";

@Component({
    selector: 'ordered-items-component',
    templateUrl: 'ordered-items.component.html'
})

export class OrderedItemsComponent implements OnChanges {

    @Input() checkoutItems: CheckoutItemModel[] = [];
    @Output() updatedCheckoutItems: EventEmitter<CheckoutItemModel[]> = new EventEmitter<CheckoutItemModel[]>
    totalPrice: number = 0;

    quantityChange(){
        this.updatedCheckoutItems.emit(this.checkoutItems);
    }

    ngOnChanges(changes: SimpleChanges){
        if (changes.checkoutItems.currentValue){
            this.updateTotalPrice();
        }
    }

    updateTotalPrice(){
        let total = 0;
        this.checkoutItems.forEach(x => {
            total += x.individualPrice * x.quantity;
        })
        this.totalPrice = total;
    }
}