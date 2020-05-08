import React from 'react'

const Cart = () => {

  return (
    <div className="cart">
      dupa
      <style jsx>{`
        .cart {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        @media(min-width: 720px) {
          .cart {
            width: 100px;
            height: 200px;
            position: absolute;
            top: 100%;
            right: 0;
            bottom: initial;
            left: initial;
            border: 1px solid #EEE;
            box-shadow: 0 0 15px #EEE;
          }
        }
      `}</style>
    </div>
  )
}

export default Cart