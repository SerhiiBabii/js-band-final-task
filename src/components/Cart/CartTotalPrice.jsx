import React from 'react';
import PropTypes from 'prop-types';

const CartTotalPrice = (props) => {
  const {cart} = props;
  let totalPrice = 0;
  if(cart) {
    cart.forEach((item) => {
      totalPrice += +item.totalPriceBook
    })
  }
  return (
    <div>
      <b>
        Total price, $
        {totalPrice}
      </b>
    </div>
  )
}

CartTotalPrice.defaultProps = {
  cart: undefined,
}

CartTotalPrice.propTypes = {
  cart: PropTypes.instanceOf(Object),
}

export default CartTotalPrice;
