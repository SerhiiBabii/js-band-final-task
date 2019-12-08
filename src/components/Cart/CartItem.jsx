import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({currentCart}) => {
  const {name, count, totalPriceBook} = currentCart;
  return (
    <tr className="row">
      <td className="col-1">{name}</td>
      <td className="col-10">{count}</td>
      <td className="col-1">{totalPriceBook}</td>
    </tr>
  )
}

CartItem.defaultProps = {
  currentCart: {},
  name: '',
  count: '',
  totalPriceBook: undefined,
}

CartItem.propTypes = {
  currentCart: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  count: PropTypes.string,
  totalPriceBook: PropTypes.number,
}

export default CartItem;