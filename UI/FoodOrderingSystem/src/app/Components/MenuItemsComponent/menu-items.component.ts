import { Component, Input } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MenuItemDialogContainer } from "src/app/Containers/MenutItemDialog/menu-item-dialog.container";
import { MenuItemModel } from "src/app/Models/menu-item.model";

@Component({
    selector: 'menu-items-component',
    templateUrl: 'menu-items.component.html'
})

export class MenuItemsComponent{

    constructor(private dialog: MatDialog){}

    @Input() menuItemsPerCategory: MenuItemModel[] = [];

    openDialog():void{
        const dialogConfig = new MatDialogConfig();
        dialogConfig.hasBackdrop = true;
        dialogConfig.disableClose = true;
        
        const dialogRef = this.dialog.open(MenuItemDialogContainer, dialogConfig);
    }
}