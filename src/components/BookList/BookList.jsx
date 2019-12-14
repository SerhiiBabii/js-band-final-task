import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import BookItem from './BookItem';
import Filters from '../Filters/Filters';
import {booksRequest, booksSuccess, booksFailure} from '../../actions/actions';
import CallApi from '../../api/api';
import Spinner from '../../spinner/spinner'
import filterForTitle from '../../filters/filterForTitle';
import filterForPrice from '../../filters/filterForPrice';

const BookList = ({books, token, loading, search, price, fetchBooksRequest, fetchBooksSuccess, fetchBooksFailure}) => {
  useEffect(() => {
    CallApi.get('/books', token)
    .then((data) => {
      fetchBooksRequest();
      setTimeout(() => fetchBooksSuccess(data), 2000);
    })
  }, [fetchBooksRequest, fetchBooksSuccess, token]);

  const spinner = (loading) ? <Spinner /> : null;
  const currentTodoList = filterForTitle(filterForPrice(books, price), search);
  const booksArea = (books && !loading) ? (currentTodoList.map((item)=> <BookItem key={item.id} book={item} />)) : null;

  return (
    <div className="row p-3">
      <div className="col-10">
        <Filters />
      </div>
      <div className="row">
        {spinner}
        {booksArea}
      </div>
    </div>
  )
}

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  token: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  fetchBooksRequest: PropTypes.func.isRequired,
  fetchBooksSuccess: PropTypes.func.isRequired,
  fetchBooksFailure: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  books: state.books.books,
  token: state.books.user.token,
  loading: state.books.loading,
  search: state.books.filters.search,
  price: state.books.filters.price,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBooksRequest: () => dispatch(booksRequest()),
  fetchBooksSuccess: (books) => dispatch(booksSuccess(books)),
  fetchBooksFailure: (error) => dispatch(booksFailure(error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

