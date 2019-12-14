const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  const price = total + quantity * book.price;
  return {
    id,
    count: +count + +quantity,
    title,
    total: +price.toFixed(2),
  };
};

export default updateCartItem;
