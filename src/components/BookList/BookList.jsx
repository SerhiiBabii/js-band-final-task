import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  // array below for testing book list
  const cart = [
    {
      id: 1,
      cover: '',
      title: 'Title 1',
      author: 'Author 1',
      price: 32,
    },
    {
      id: 2,
      cover: '',
      title: 'Title 2',
      author: 'Author 2',
      price: 18,
    },
    {
      id: 3,
      cover: '',
      title: 'Title 3',
      author: 'Author 3',
      price: 12,
    },
  ]
  return (
    <div className="row">
      {cart.map((item)=> <BookItem key={item.id} book={item} />)}
    </div>
  )
}

export default BookList;
