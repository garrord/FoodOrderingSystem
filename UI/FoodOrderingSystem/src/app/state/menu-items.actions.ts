import { createAction, props } from "@ngrx/store";
import { CheckoutCartModel } from "../Models/checkout-cart.model";

export  const addItemToCheckout  = createAction(
    '[Menu] Add Item To Checkout',
    props<{ item: CheckoutCartModel }>()
);