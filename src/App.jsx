import React from 'react';
import Header from "./components/Header/Header";
import Cart from './components/Cart/Cart'
import Book from './components/Book/Book'
import SignIn from './components/SignIn/SignIn'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <div className="container">
      <hr />
      <Header />
      <hr />
      <Cart />
      <Book />
      <SignIn />
      <NotFound />
    </div>
  );
}

export default App;