import {fetchProductById} from '../api'
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants'
import {PRODUCT_DETAILS_FAIL} from '../constants/productConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const product = await fetchProductById(id)
  if (product) {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        ...product,
        qty,
      },
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  } else {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: 'Product not found',
    })
  }
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
