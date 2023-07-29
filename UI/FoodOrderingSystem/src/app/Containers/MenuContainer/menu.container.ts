import { Component, OnInit } from "@angular/core";
import { MenuItemModel } from "src/app/Models/menu-item.model";
import { MenuItemsService } from "src/app/Services/menu-items.service";

@Component({
    selector:'menu-container',
    templateUrl: 'menu.container.html',
    styleUrls:['menu.container.scss']
})

export class MenuContainer implements OnInit{
    
    constructor(private menuItemService: MenuItemsService){}

    categories: string[] = [];
    menuItemsPerCategory: MenuItemModel[] = [];

    ngOnInit(): void {
        this.menuItemService.GetAllCategories().subscribe({
            next: (x) => this.categories = x,
            complete: () => this.menuItemService.GetFoodPerCategory(this.categories[0]).subscribe(x => this.menuItemsPerCategory = x)
        });
    }

    selectCategory(category: string){
        this.menuItemService.GetFoodPerCategory(category).subscribe(x => this.menuItemsPerCategory = x);
    }
}