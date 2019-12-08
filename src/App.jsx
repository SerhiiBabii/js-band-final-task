import React from 'react';
import Header from "./components/Header/Header";
import Cart from './components/Cart/Cart'
import Book from './components/Book/Book'

const App = () => {
  return (
    <div className="App">
      <hr />
      <Header />
      <hr />
      <Cart />
      <Book />
    </div>
  );
}

export default App;