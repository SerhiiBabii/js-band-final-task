import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BookItem = ({book}) => {
  const {id, cover, title, author, price} = book;
  const image = cover || 'images/imageNotFound.png'
  return (
    <div className="cart row col-3 border m-4 p-3">
      <img className="col-12" src={image} alt="cover" />
      <p className="col-12">{title}</p>
      <p className="col-12">{author}</p>
      <p className="row col-12">
        <span className="col-8">
          Price:
          {' '}
          {price}
        </span>
        <Link to={`/books/${id}`} className="btn btn-secondary col-4">View</Link>
      </p>
    </div>
  )
}

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
}

export default BookItem;