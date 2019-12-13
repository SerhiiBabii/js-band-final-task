import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {signOut} from '../../actions/actions';

const HeaderUser = ({user, signOutUser}) => {
  const {username, avatar} = user;

  return (
    <div>
      <Link to="/cart">
        <img height="40" src="./images/cart.svg" alt="cart" />
      </Link>
      <button onClick={signOutUser} type="button" className="btn btn-primary m-2">Sing-Out</button>
      <img height="40" className="m-2 rounded-circle" src={avatar} alt="avatar" />
      <span>{username}</span>
    </div>
  )
}

HeaderUser.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  signOutUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.books.user,
})

const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUser);