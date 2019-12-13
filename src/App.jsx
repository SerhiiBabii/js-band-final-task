import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {Provider} from 'react-redux'
import Header from "./components/Header/Header";
import Cart from './components/Cart/Cart';
import Book from './components/Book/Book';
import SignIn from './components/SignIn/SignIn';
import NotFound from './components/NotFound/NotFound';
import BookList from './components/BookList/BookList';
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
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
            <Route exact path="/books" component={BookList} /> 
            <Route path="/books/:id" component={Book} />
            <Route path="/cart" component={Cart} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;