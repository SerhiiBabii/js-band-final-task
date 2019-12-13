import React from 'react';
import PropTypes from 'prop-types'
import BookPrice from './BookPrice';
import Spinner from '../../spinner/spinner'

const Book = ({loading, book, book: {title, author, description, cover, tags, level, count, price}}) => {
  const posterImage = cover || './images/imageNotFound.png';

  return (
    (book.title && !loading) ? (
      <div className="m-3">
        <div className="row">
          <img className="col-4" src={posterImage} alt="poster" />
          <div className="col-4">
            <p>
              Book name:
              {' '}
              {title}
            </p>
            <p>
              Book author:
              {' '}
              {author}
            </p>
            <p>
              Book level:
              {' '}
              {level}
            </p>
            <p>
              Book tags:
              {' '}
              {tags}
            </p>
          </div>
          <div className="col-4">
            <BookPrice price={price} maxBooks={count} />
          </div>
        </div>
        <p>
          Description: 
          {description}
        </p>
      </div>
    ) : <Spinner />
  )
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Book;
