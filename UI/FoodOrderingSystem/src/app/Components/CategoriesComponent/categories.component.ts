import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'categories-component',
    templateUrl: 'categories.component.html'
})

export class CategoriesComponent{
    @Input() categories: string[] = [];
    @Output() selectedCategory: EventEmitter<string> = new EventEmitter<string>();

    selectCategory(category: string):void{
        this.selectedCategory.emit(category);
    }
}