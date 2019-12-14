import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartItem from "./CartItem";
import CartTotalPrice from "./CartTotalPrice";


const CartTable = ({cartItems, orderTotal}) => {
  return (
    <div>
      <table className="table m-3">
        <tbody>
          {cartItems ? cartItems.map((item) => <CartItem key={item.id} currentCart={item} />) : null}
        </tbody>
      </table>
      <CartTotalPrice orderTotal={orderTotal} />
    </div>
  )
}

CartTable.propTypes = {
  cartItems: PropTypes.instanceOf(Object).isRequired,
  orderTotal: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  cartItems: state.books.cart.cartItems,
  orderTotal: state.books.cart.orderTotal,
});

export default connect(mapStateToProps)(CartTable);
