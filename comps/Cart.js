import React, { useState } from 'react'
import { ShoppingCartOutline as CartIcon } from '@styled-icons/evaicons-outline/ShoppingCartOutline'

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div>
      <button className="cart" onClick={ () => setCartOpen(!cartOpen) }>
        <CartIcon width="40px" />
      </button>
      { cartOpen && 'dupa' }
      <style jsx>{`
        .cart {
          color: inherit;
          background: none;
          border: none;
          cursor: pointer;
        }
        .cart:hover,
        .cart:active,
        .cart:focus {
          color: #333;
        }
      `}</style>
    </div>
  )
}

export default Cart