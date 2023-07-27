import { Component, Input } from "@angular/core";
import { MenuItemModel } from "src/app/Models/menu-item.model";

@Component({
    selector: 'menu-items-component',
    templateUrl: 'menu-items.component.html'
})

export class MenuItemsComponent{
    @Input() menuItemsPerCategory: MenuItemModel[] = [];
}