import { Product } from "@/app/utils/types";

export interface State {
  quantity: number;
  cartItems: number;
  cartProducts: Product[];
  total: number;
  subTotal: number;
}

export type ActionType =
  | "INCREASE_QUANTITY"
  | "DECREASE_QUANTITY"
  | "ADD_TO_CART"
  | "DELETE_FROM_CART"
  // | "ADD_PRODUCT_TO_CART"
  // | "REMOVE_PRODUCT_FROM_CART"
  | "CALCULATE_TOTAL"
  | "INCREASE_FROM_CART"
  | "DECREASE_FROM_CART";

export type ActionPayload = { items: number; product: Product };

export interface Action {
  type: ActionType;
  payload?: ActionPayload;
}

export const handleCartReducer = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "ADD_TO_CART":
      return addToCart(state, action.payload!);

    case "INCREASE_QUANTITY":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        quantity: Math.max(state.quantity - 1, 1),
      };

    case "DELETE_FROM_CART":
      const { payload } = action;
      const { items, product } = payload!;
      product.quantity = 0;
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (prod: Product) => prod._rev !== product._rev
        ),
        total: state.total - state.subTotal,
        cartItems: state.cartItems - product.quantity,
      };

    case "INCREASE_FROM_CART":

    case "DECREASE_FROM_CART":

    default:
      throw Error("Action not defined: " + action.type);
  }
};

const addToCart = (_state: State, _payload: ActionPayload) => {
  const { items, product } = _payload;
  const { cartItems, cartProducts, total } = _state;
  const productExistsInCart = cartProducts.some(
    (prod: Product) => prod._rev === product._rev
  );
  // product.quantity = (!productExistsInCart ? 0 : product.quantity) + items;
  const updatedProduct = {
    ...product,
    quantity: productExistsInCart ? product.quantity + items : items,
  };
  console.log(productExistsInCart ? "product exists" : "product not exists");
  console.log("updated product.quantity", updatedProduct.quantity);
  return productExistsInCart
    ? {
        ..._state,
        cartItems: cartItems + items,
        subTotal: product.price * updatedProduct.quantity,
        total: total + product.price * items,
      }
    : {
        ..._state,
        cartItems: cartItems + items,
        cartProducts: [...cartProducts, updatedProduct],
        subTotal: product.price * updatedProduct.quantity,
        total: total + product.price * items,
      };
};
