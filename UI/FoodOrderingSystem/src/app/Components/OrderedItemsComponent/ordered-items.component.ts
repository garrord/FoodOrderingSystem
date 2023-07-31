import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { CheckoutCartModel } from "src/app/Models/checkout-cart.model";
import { CheckoutItemModel } from "src/app/Models/checkout-item.model";

@Component({
    selector: 'ordered-items-component',
    templateUrl: 'ordered-items.component.html'
})

export class OrderedItemsComponent implements OnInit{

    constructor(private fb: FormBuilder){}

    @Input() checkoutItems!: CheckoutCartModel;
    orderForm!:FormGroup;
    quantityOptions: number[] = [1, 2, 3, 4, 5]; 

    ngOnInit(): void {
        this.orderForm = this.fb.group({
            items: this.fb.array([])
        });
        this.patch();
    }

    patch(){
        let group = this.orderForm.get('items') as FormArray;
        this.checkoutItems.items.forEach((x: { name:string; price:number; quantity:number; message?:string }) => {
            group.push(this.patchValue(x.name, x.price, x.quantity, x.message))
        });
    }

    patchValue(name:string, price:number, quantity:number, message?:string){
        return this.fb.group({
            name:name,
            price:price,
            quantity:quantity,
            message:message
        });
    }

    getOptionsControls() {
        return (this.orderForm.get('items') as FormArray).controls;
    }
}