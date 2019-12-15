import React, {useEffect} from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Header from "./components/Header/Header";
import Cart from './components/Cart/Cart';
import Book from './components/Book/Book';
import SignIn from './components/SignIn/SignIn';
import NotFound from './components/NotFound/NotFound';
import BookList from './components/BookList/BookList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { saveState, loadState } from './localStorage/localStorage';
import {signIn} from './actions/actions';

const App = ({signInUser}) => {

  useEffect(() => {
    const conditionStore = loadState('user');
    if(!conditionStore) {
      saveState({user: {}});
    }
    if(conditionStore) {
      const {user: {username, avatar, token}} = loadState('user');
      signInUser(username, avatar, token);
    }
  }, [signInUser]);

  return (
    <Router>
      <div className="container">
        <hr />
        <Header />
        <hr />
        <Switch>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <Route path="/signin" component={SignIn} />
          <PrivateRoute exact path="/books" component={BookList} />
          <PrivateRoute path="/books/:id" component={Book} />
          <PrivateRoute path="/cart" component={Cart} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

App.propTypes = {
  signInUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  signInUser: (username, avatar, token) => dispatch(signIn(username, avatar, token)),
})

export default connect(null, mapDispatchToProps)(App);
