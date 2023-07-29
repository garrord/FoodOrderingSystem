import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CheckoutCartModel } from "src/app/Models/checkout-cart.model";

@Component({
    selector: 'menu-item-dialog-container',
    templateUrl: 'menu-item-dialog.container.html'
})

export class MenuItemDialogContainer implements OnInit{
  
    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<MenuItemDialogContainer>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ){}

    foodForm!: FormGroup;

    ngOnInit():void{
        this.foodForm = this.fb.group({
            price: { value: this.data.selectedItem.price, disabled: true },
            quantity: 1,
            message: ''
        })
    }

    cancel():void{
        this.dialogRef.close();
    }

    save():void{
        let item: CheckoutCartModel = this.createItem();
        this.dialogRef.close(item);
    }

    createItem():CheckoutCartModel{
        let item: CheckoutCartModel = new CheckoutCartModel();
        item.name = this.data.selectedItem.name;
        item.price = this.foodForm.get('price')?.value;
        item.quantity = this.foodForm.get('quantity')?.value;
        item.message = this.foodForm.get('message')?.value;

        return item;
    }
}