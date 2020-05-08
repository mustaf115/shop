import React, { useState } from 'react'
import { ShoppingCartOutline as CartIcon } from '@styled-icons/evaicons-outline/ShoppingCartOutline'
import Cart from './Cart'

const CartButton = () => {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="cart-container">
      <button className="cart-button" onClick={ () => setCartOpen(!cartOpen) }>
        <CartIcon width="40px" />
      </button>
      { cartOpen && <Cart /> }
      <style jsx>{`
        .cart-container {
          position: relative;
        }
        .cart-button {
          color: inherit;
          background: none;
          border: none;
          cursor: pointer;
        }
        .cart-button:hover,
        .cart-button:active,
        .cart-button:focus {
          color: #333;
        }
      `}</style>
    </div>
  )
}

export default CartButton