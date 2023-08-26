import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { MenuItemDialogContainer } from "../../Containers/MenutItemDialog/menu-item-dialog.container";
import { MenuItemModel } from "../../Models/menu-item.model";
import { CheckoutMenuState } from "../../state/menu-checkout.reducer"
import { addItemToCheckout } from "../../state/menu-items.actions";
import { CheckoutItemModel } from "../../Models/checkout-item.model";

@Component({
    selector: 'menu-items-component',
    templateUrl: 'menu-items.component.html'
})

export class MenuItemsComponent{

    constructor(
        private dialog: MatDialog,
        private store: Store<CheckoutMenuState>
    ){}

    @Input() menuItemsPerCategory: MenuItemModel[] = [];

    openDialog(selectedItem: MenuItemModel):void{
        const dialogRef: MatDialogRef<MenuItemDialogContainer> = this.dialog.open(MenuItemDialogContainer, {
            height: '275px',
            width: '300px',
            hasBackdrop: true,
            disableClose: true,
            data:{
                selectedItem
            }
        });

        dialogRef.afterClosed().subscribe(item => {
            if(item as CheckoutItemModel){
                this.store.dispatch(addItemToCheckout( { item } ));
            }
        });
    }
}