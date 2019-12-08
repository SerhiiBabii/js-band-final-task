import React from 'react'
import PropTypes from 'prop-types'
import HeaderUser from './HeaderUser';

const Header = ({user}) => {
  return (
    <nav className="navbar navbar-dark">
      <h3>JS BAND STORE / Serhii Babii</h3>
      {user ? <HeaderUser /> : null}
    </nav>
  )
}

Header.defaultProps = {
  user: {},
}

Header.propTypes = {
  user: PropTypes.instanceOf(Object),
}

export default Header;