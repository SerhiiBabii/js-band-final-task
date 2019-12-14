import * as actionTypes from '../actions/actionTypes';
import updateOrder from './additionFunctions/updateOrder';

const initialState = {
  user: {
    username: undefined,
    avatar: undefined,
    token: undefined,
  },
  books: [],
  book: {},
  filters: {
    search: '',
    price: 'all',
  },
  cart: {
    cartItems: [],
    orderTotal: undefined,
  },
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
        user: {
          username: undefined,
          avatar: undefined,
          token: undefined,
        },
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
        books: [],
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
        books: [],
        loading: false,
        error: action.error,
      };
    case actionTypes.FETCH_BOOK_REQUEST:
      return {
        ...state,
        book: {},
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
        book: {},
        loading: false,
        error: action.error,
      };
    case actionTypes.ADD_BOOK:
      return {
        ...state,
        cart: updateOrder(action.bookId, action.quantity, state),
      };
    case actionTypes.SEND_BOOK:
      return {
        ...state,
        cart: {
          cartItems: [],
          orderTotal: undefined,
        },
      };
    default:
      return state;
  }
};

export default books;
