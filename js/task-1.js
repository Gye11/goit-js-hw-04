function isEnoughCapacity(products, containerSize) {
  let total = 0;

  for (const key in products) {
    total += products[key];
  }

  return total <= containerSize;
}
