import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants'

const initialCartState = {
  cartItems: [],
}

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existingItem = state.cartItems.find(
        (x) => x.productId === item.productId,
      )

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productId === existingItem.productId
              ? {...item, qty: item.qty + x.qty}
              : x,
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.productId !== action.payload,
        ),
      }

    default:
      return state
  }
}