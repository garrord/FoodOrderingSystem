import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { MenuItemDialogContainer } from "src/app/Containers/MenutItemDialog/menu-item-dialog.container";
import { MenuItemModel } from "src/app/Models/menu-item.model";
import { CheckoutMenuState } from "src/app/state/menu-checkout.reducer";
import { addItemToCheckout } from "../../state/menu-items.actions";
import { CheckoutItemModel } from "src/app/Models/checkout-item.model";

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
            height: '325px',
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