import React from 'react'
import PropTypes from 'prop-types'
import CartEmpty from './CartEmpty'
import CartTable from './CartTable'

const Cart = ({cart}) => {
  return (
    <div>
      {cart ? <CartTable /> : <CartEmpty />}
    </div>
  )
}

Cart.defaultProps = {
  cart: undefined,
}

Cart.propTypes = {
  cart: PropTypes.instanceOf(Object),
}

export default Cart;