import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MenuItemModel } from "../Models/menu-item.model";

@Injectable()

export class MenuItemsService{
    
    constructor(private http: HttpClient){}

    private baseUrl: string = 'http://localhost:5246/api/menuItems';


    public GetAllCategories(): Observable<string[]>{
        return this.http.get<string[]>(`${this.baseUrl}/categories`);
    }

    public GetFoodPerCategory(category: string): Observable<MenuItemModel[]>{
        return this.http.get<MenuItemModel[]>(`${this.baseUrl}/${category}`);
    }
}