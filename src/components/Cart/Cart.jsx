import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartEmpty from './CartEmpty';
import CartTable from './CartTable';
import {sendBook} from '../../actions/actions';

const Cart = ({cartItems, purchase}) => {
  return (
    <div>
      <div className="text-right">
        <button onClick={purchase} disabled={!cartItems.length} className="btn btn-primary" type="button">Purchase</button>
      </div>
      {cartItems.length ? <CartTable /> : <CartEmpty />}
    </div>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.instanceOf(Object).isRequired,
  purchase: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  cartItems: state.books.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  purchase: () => dispatch(sendBook()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
