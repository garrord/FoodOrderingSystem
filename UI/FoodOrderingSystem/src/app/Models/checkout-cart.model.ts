import { CheckoutItemModel } from "./checkout-item.model";

export class CheckoutCartModel{
    items!:CheckoutItemModel[];
    totalPrice!:number;
}