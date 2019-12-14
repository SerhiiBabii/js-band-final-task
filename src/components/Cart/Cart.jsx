import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartEmpty from './CartEmpty';
import CartTable from './CartTable';
import {sendBook} from '../../actions/actions';
import CallApi from '../../api/api';

const fetchForSendCart = (cart, token, func) => {
  CallApi.postWithToken('/purchase', token, {
    books: cart,
  }).then(() => {
    func();
  })
}

const Cart = ({cartItems, token, purchase}) => {
  return (
    <div>
      <div className="text-right">
        <button onClick={() => {fetchForSendCart(cartItems, token, purchase)}} disabled={!cartItems.length} className="btn btn-primary" type="button">Purchase</button>
      </div>
      {cartItems.length ? <CartTable /> : <CartEmpty />}
    </div>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.instanceOf(Object).isRequired,
  token: PropTypes.string.isRequired,
  purchase: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  cartItems: state.books.cart.cartItems,
  token: state.books.user.token,
});

const mapDispatchToProps = (dispatch) => ({
  purchase: () => dispatch(sendBook()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
