// eslint-disable-next-line
function filterForPrice(items, filter) {
  if (filter === 'all') {
    return items;
  }
  if (filter === 'from_0_to_15') {
    return items.filter((item) => item.price >= 0 && item.price < 15);
  }
  if (filter === 'from_15_to_30') {
    return items.filter((item) => item.price >= 15 && item.price < 30);
  }
  if (filter === 'more_than_30') {
    return items.filter((item) => item.price > 30);
  }
}
export default filterForPrice;
