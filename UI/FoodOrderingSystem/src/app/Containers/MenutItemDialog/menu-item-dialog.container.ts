import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CheckoutItemModel } from "../../Models/checkout-item.model";

@Component({
    selector: 'menu-item-dialog-container',
    templateUrl: 'menu-item-dialog.container.html',
    styleUrls:['menu-item-dialog.container.scss']
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
            quantity: "1",
            //message: ''
        })
    }

    cancel():void{
        this.dialogRef.close();
    }

    save():void{
        let item: CheckoutItemModel = this.createItem();
        this.dialogRef.close(item);
    }

    createItem():CheckoutItemModel{
        let item: CheckoutItemModel = new CheckoutItemModel();
        item.name = this.data.selectedItem.name;
        item.individualPrice = this.data.selectedItem.price;
        item.quantity = parseInt(this.foodForm.get('quantity')?.value);
        //item.message = this.foodForm.get('message')?.value;

        return item;
    }

    calculateTotalPrice():string{
        let totalPrice: number = this.data.selectedItem.price * parseInt(this.foodForm.get('quantity')?.value);
        return totalPrice.toFixed(2);
    }
}