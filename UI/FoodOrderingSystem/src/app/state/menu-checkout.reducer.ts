import { createReducer, createSelector, on } from "@ngrx/store";
import { CheckoutItemModel } from "../Models/checkout-item.model";
import { addItemToCheckout, clearCheckoutCart, updateCheckoutCart } from "./menu-items.actions"

export interface CheckoutMenuState{
    menuItems:CheckoutItemModel[];
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
    ),
    on(
        updateCheckoutCart, (state, action): CheckoutMenuState => {
            console.log("state being updated")
            return {
                ...state,
                menuItems: action.items
            }
        }
    ),
    on(
        clearCheckoutCart, (state: CheckoutMenuState) => {
            return {
                ...state,
                menuItems: []
            }
        }
    )
);