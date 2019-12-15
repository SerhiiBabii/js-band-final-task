import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, user, ...rest}) => (
  <Route
    {...rest}
    render={(props) => (
      user.username ? <Component {...props} /> : <Redirect to='/signin' />
    )}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
}

const mapStateToProps = (state) => ({
  user: state.books.user,
})

export default connect(mapStateToProps)(PrivateRoute);
