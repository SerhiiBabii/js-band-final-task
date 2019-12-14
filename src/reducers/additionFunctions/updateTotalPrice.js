const updateTotalPrice = (cartItems, book, quantity) => {
  let totalCount = 0;
  cartItems.map((item) => {
    totalCount += item.total;
    return totalCount;
  });
  return totalCount + book.price * quantity;
};

export default updateTotalPrice;
