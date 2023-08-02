import { CheckoutItemModel } from "./checkout-item.model";

export class CheckoutCartModel{
    firstName!:string;
    lastName!:string;
    cellphone!:string;
    emailAddress!:string;
    tip!:number;
    totalPrice!:number;
    deliveryMethod!:string;
    paymentMethod!:string;
    address!:Address;
    message!:string;
    foodItemsOrdered!:CheckoutItemModel[];
}

export class Address{
    addressLine1!:string;
    addressLine2!:string;
    city!:string;
    state!:string;
    zipcode!:string;
}