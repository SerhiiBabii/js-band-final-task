import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import BookItem from './BookItem';
import Filters from '../Filters/Filters';
import {booksRequest, booksSuccess, booksFailure} from '../../actions/actions';

const BookList = ({books, token, loading, fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure}) => {

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
  token: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchBooksRequest: PropTypes.func.isRequired,
  fetchBooksSuccess: PropTypes.func.isRequired,
  fetchBooksFailure: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  books: state.books.books,
  token: state.books.user.token,
  loading: state.books.loading,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBooksRequest: () => dispatch(booksRequest()),
  fetchBooksSuccess: (books) => dispatch(booksSuccess(books)),
  fetchBooksFailure: (error) => dispatch(booksFailure(error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

