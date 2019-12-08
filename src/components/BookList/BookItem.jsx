import React from 'react'
import PropTypes from 'prop-types'

const BookItem = ({book}) => {
  const {cover, title, author, price} = book;
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
        <button className="btn btn-secondary col-4" type="button">View</button>
      </p>
    </div>
  )
}

BookItem.defaultProps = {
  book: undefined,
}

BookItem.propTypes = {
  book: PropTypes.instanceOf(Object),
}

export default BookItem;