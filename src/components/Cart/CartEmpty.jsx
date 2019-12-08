import React from 'react'

const CartEmpty = () => {
  return (
    <div className="text-center">
      <img className="text-center" height="80" src="./images/cart.svg" alt="empty cart" />
      <p>Cart empty.</p>
    </div>
  )
}

export default CartEmpty;