import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({currentCart: {title, count, total}}) => {
  return (
    <tr className="row">
      <td className="col-7">{title}</td>
      <td className="col-4">{count}</td>
      <td className="col-1">{total}</td>
    </tr>
  )
}

CartItem.defaultProps = {
  currentCart: {},
  title: '',
  count: 0,
  total: 0,
}

CartItem.propTypes = {
  currentCart: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  count: PropTypes.number,
  total: PropTypes.number,
}

export default CartItem;
