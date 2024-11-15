import React from 'react';
import PropTypes from 'prop-types';

const CartTotalPrice = ({orderTotal}) => {
  return (
    <div className="text-right">
      <b>
        Total price, $
        {orderTotal}
      </b>
    </div>
  )
}

CartTotalPrice.propTypes = {
  orderTotal: PropTypes.string.isRequired,
}

export default CartTotalPrice;
