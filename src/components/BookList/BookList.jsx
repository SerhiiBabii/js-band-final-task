import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import Filters from '../Filters/Filters'

const BookList = ({books}) => {

  return (
    <div className="row p-3">
      <div className="col-10">
        <Filters />
      </div>
      <div className="row">
        {books.map((item)=> <BookItem key={item.id} book={item} />)}
      </div>
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
}

export default BookList;
