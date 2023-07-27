import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'menu-item-dialog-container',
    templateUrl: 'menu-item-dialog.container.html'
})

export class MenuItemDialogContainer{
    
    constructor(
        public dialogRef: MatDialogRef<MenuItemDialogContainer>
        //@Inject(MAT_DIALOG_DATA) public data: DialogData
        ){}

    onNoClick():void{
        this.dialogRef.close();
    }
}

export interface DialogData{
    animal: 'panda' | 'unicorn' | 'lion';
}