export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const SET_PRODUCT_QUANTITY = 'SET_PRODUCT_QUANTITY'

export const addProductToCart = id => ({
  type: ADD_PRODUCT_TO_CART,
  id
})

export const setProductQuantity = (id, quantity) => ({
  type: SET_PRODUCT_QUANTITY,
  id,
  quantity
})