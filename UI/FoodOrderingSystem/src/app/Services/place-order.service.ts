import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CheckoutCartModel } from "../Models/checkout-cart.model";

@Injectable()
export class OrderService{

    constructor(private http:HttpClient){}

    baseUrl:string = 'http://localhost:5246/api/placeOrder';

    public placeOrder(order:CheckoutCartModel):Observable<any>{
        return this.http.post(`${this.baseUrl}/create`, order);
    }    
}