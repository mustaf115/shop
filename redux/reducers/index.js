import {
  ADD_PRODUCT_TO_CART,
  SET_PRODUCT_QUANTITY
} from '../actions'

const initialState = {
  cart: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART: return {
      ...state,
      cart: [
        ...state.cart,
        {
          id: action.id, 
          quantity: 1
        }
      ]
    }
    case SET_PRODUCT_QUANTITY:
      const updated = state.cart.map( product => {
        if(product.id !== action.id) return product
        return {
          id: action.id,
          quantity: action.quantity
        }
      })
      return {
        ...state,
        cart: updated
      }
  }
}