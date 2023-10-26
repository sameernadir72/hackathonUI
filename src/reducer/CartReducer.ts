import { Product } from "@/app/utils/types";

interface State {
  cartItems: number;
  cartProducts: Product[];
  total: number;
}

export type ActionType =
  | "ADD_CART_ITEMS"
  | "REMOVE_CART_ITEMS"
  | "ADD_PRODUCT_TO_CART"
  | "REMOVE_PRODUCT_FROM_CART"
  | "CALCULATE_TOTAL";

export type ActionPayload = number | Product;

interface Action {
  type: ActionType;
  payload: ActionPayload;
}

export const handleCartReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_CART_ITEMS":
      return {
        ...state,
        cartItems: state.cartItems + 1,
      };
    case "REMOVE_CART_ITEMS":
      return {
        ...state,
        cartItems: state.cartItems + 1,
      };
    default:
      throw Error("Unknown Error: " + action.type);
  }
};
