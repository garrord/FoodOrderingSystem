import { createReducer, createSelector, on } from "@ngrx/store";
import { CheckoutCartModel } from "../Models/checkout-cart.model";
import { addItemToCheckout } from "./menu-items.actions"

export interface CheckoutMenuState{
    menuItems:CheckoutCartModel[];
};

export interface AppState {
    feature: CheckoutMenuState;
}

const initialState: CheckoutMenuState = {
    menuItems: []
};

export const getCheckoutMenuState = (state: AppState) => state.feature;

export const getMenuItemsState = createSelector(
    getCheckoutMenuState,
    (state: CheckoutMenuState) => state.menuItems 
);

export const menuCheckoutReducer = createReducer<CheckoutMenuState>(
    initialState,
    on(
        addItemToCheckout, (state, action): CheckoutMenuState => {
            return {
                ...state,
                menuItems: [...state.menuItems, action.item]
            };
        }
    )
);