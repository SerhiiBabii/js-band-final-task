import * as actionTypes from './actionTypes';

export const booksRequest = () => ({
  type: actionTypes.FETCH_BOOKS_REQUEST,
});

export const booksSuccess = (books) => ({
  type: actionTypes.FETCH_BOOKS_SUCCESS,
  books,
});

export const booksFailure = (error) => ({
  type: actionTypes.FETCH_BOOKS_FAILURE,
  error,
});

export const signIn = (username, avatar, token) => ({
  type: actionTypes.SIGNIN,
  username,
  avatar,
  token,
});

export const signOut = () => ({
  type: actionTypes.SIGNOUT,
});

export const addBook = (book, quantity) => ({
  type: actionTypes.ADD_BOOK,
  book,
  quantity,
});

export const bookRequest = () => ({
  type: actionTypes.FETCH_BOOK_REQUEST,
});

export const bookSuccess = (book) => ({
  type: actionTypes.FETCH_BOOK_SUCCESS,
  book,
});

export const bookFailure = (error) => ({
  type: actionTypes.FETCH_BOOK_FAILURE,
  error,
});

export const sendBook = () => ({
  type: actionTypes.SEND_BOOK,
});

export const showFilteredBooks = (name, value) => ({
  type: actionTypes.SHOW_FILTERED_BOOKS,
  name,
  value,
});
