import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class OrderService{

    constructor(private http:HttpClient){}

    baseUrl:string = '';

    public placeOrder(stuff:string):Observable<void>{
        return this.http.put<void>(`${this.baseUrl}`, stuff );
    }    
}