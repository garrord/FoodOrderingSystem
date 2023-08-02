import { createAction, props } from "@ngrx/store";
import { CheckoutItemModel } from "../Models/checkout-item.model";

export  const addItemToCheckout = createAction(
    '[Menu] Add Item To Checkout',
    props<{ item: CheckoutItemModel }>()
);

export const updateCheckoutCart = createAction(
    '[Menu] Update Item In Checkout',
    props<{items: CheckoutItemModel[]}>()
);

export const clearCheckoutCart = createAction(
    '[Menu] Clear Checkout Cart'
);