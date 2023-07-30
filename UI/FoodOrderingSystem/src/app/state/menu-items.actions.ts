import { createAction, props } from "@ngrx/store";
import { CheckoutItemModel } from "../Models/checkout-item.model";

export  const addItemToCheckout  = createAction(
    '[Menu] Add Item To Checkout',
    props<{ item: CheckoutItemModel }>()
);