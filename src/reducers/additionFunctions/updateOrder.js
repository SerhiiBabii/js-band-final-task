import updateCartItems from './updateCartItems';
import updateCartItem from './updateCartItem';
import updateTotalPrice from './updateTotalPrice';

const updateOrder = (bookId, quantity, state) => {
  const {
    books,
    cart: { cartItems },
  } = state;
  const book = books.find((item) => item.id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    orderTotal: updateTotalPrice(cartItems, book, quantity).toFixed(2),
  };
};

export default updateOrder;
