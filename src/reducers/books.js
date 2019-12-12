import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: undefined,
  books: undefined,
  book: undefined,
  filters: {
    search: '',
    price: 'all',
  },
  cart: undefined,
  loading: false,
  error: null,
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN:
      return {
        ...state,
        user: {
          username: action.username,
          avatar: action.avatar,
          token: action.token,
        },
      };
    case actionTypes.SIGNOUT:
      return {
        ...state,
        user: undefined,
      };
    case actionTypes.SHOW_FILTERED_BOOKS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.name]: action.value,
        },
      };
    case actionTypes.FETCH_BOOKS_REQUEST:
      return {
        ...state,
        books: undefined,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.books,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        books: undefined,
        loading: false,
        error: action.error,
      };
    case actionTypes.FETCH_BOOK_REQUEST:
      return {
        ...state,
        book: undefined,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        book: action.book,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_BOOK_FAILURE:
      return {
        ...state,
        book: undefined,
        loading: false,
        error: action.error,
      };
    case actionTypes.ADD_BOOK:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            book: action.book,
            quantity: action.quantity,
          },
        ],
      };
    case actionTypes.SEND_BOOK:
      return {
        ...state,
        cart: undefined,
      };
    default:
      return state;
  }
};

export default books;
