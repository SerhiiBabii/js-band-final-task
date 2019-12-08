import React from 'react'
import PropTypes from 'prop-types'
import CartItem from "./CartItem";
import CartTotalPrice from "./CartTotalPrice";

const CartTable = ({cart}) => {
  return (
    <div>
      <table className="table m-3">
        <tbody>
          {cart ? cart.map((item) => <CartItem key={item.id} currentCart={item} />) : null}
        </tbody>
      </table>
      <CartTotalPrice cart={cart || null} />
    </div>
  )
}

CartTable.defaultProps = {
  cart: undefined,
}

CartTable.propTypes = {
  cart: PropTypes.instanceOf(Object),
}

export default CartTable;