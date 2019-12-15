import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {bookRequest, bookSuccess, bookFailure} from '../../actions/actions';
import BookPrice from './BookPrice';
import Spinner from '../../spinner/spinner';
import CallApi from '../../api/api';
import NotFound from '../NotFound/NotFound';

const Book = ({
  match,
  token,
  loading,
  book,
  book: {
    id,
    title,
    author,
    description,
    cover, tags,
    level,
    count,
    price,
  },
  books,
  fetchBookSuccess,
  fetchBookRequest,
  fetchBookFailure,
}) => {

  useEffect(() => {
    if(books.length > match.params.id && !isNaN(match.params.id)){
      CallApi.get(`/books/${match.params.id}`, token)
      .then((data) => {
        fetchBookRequest();
        setTimeout(() => fetchBookSuccess(data), 2000);
      })
    }
  }, [books.length, fetchBookRequest, fetchBookSuccess, match.params.id, token]);

  const posterImage = cover || './images/imageNotFound.png';
  
  if(books.length < match.params.id || isNaN(match.params.id)) {
    return <NotFound />
  }

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
            <BookPrice id={id} price={price} maxBooks={count} />
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
  books: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  fetchBookRequest: PropTypes.func.isRequired,
  fetchBookSuccess: PropTypes.func.isRequired,
  fetchBookFailure: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  books: state.books.books,
  book: state.books.book,
  loading: state.books.loading,
  token: state.books.user.token,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBookRequest: () => dispatch(bookRequest()),
  fetchBookSuccess: (book) => dispatch(bookSuccess(book)),
  fetchBookFailure: (error) => dispatch(bookFailure(error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Book);
