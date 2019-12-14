const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }
  if (index === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
};

export default updateCartItems;
