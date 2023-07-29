import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { MenuItemDialogContainer } from "src/app/Containers/MenutItemDialog/menu-item-dialog.container";
import { MenuItemModel } from "src/app/Models/menu-item.model";

@Component({
    selector: 'menu-items-component',
    templateUrl: 'menu-items.component.html'
})

export class MenuItemsComponent{

    constructor(private dialog: MatDialog){}

    @Input() menuItemsPerCategory: MenuItemModel[] = [];

    openDialog(selectedItem: MenuItemModel):void{
        const dialogRef: MatDialogRef<MenuItemDialogContainer> = this.dialog.open(MenuItemDialogContainer, {
            hasBackdrop: true,
            disableClose: true,
            data:{
                selectedItem
            }
        });

        dialogRef.afterClosed().subscribe(x => {
            if(x){
                console.log(x);
            }
        });
    }
}