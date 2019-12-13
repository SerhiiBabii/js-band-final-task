import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import HeaderUser from './HeaderUser';

const Header = ({user}) => {
  return (
    <nav className="navbar navbar-dark">
      <h3>JS BAND STORE / Serhii Babii</h3>
      {user.username ? <HeaderUser /> : null}
    </nav>
  )
}

Header.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
}

const mapStateToProps = (state) => ({
  user: state.books.user,
})

export default connect(mapStateToProps)(Header);