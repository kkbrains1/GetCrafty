const calcQuantity = (shoppingBasket, product) => {
  const productInShoppingBasket = shoppingBasket.find(item => item.product._id === product._id);
  //console.log('calcQuantity', 'shoppingBasket', shoppingBasket, 'product', product);
  //console.log('productInShoppingBasket', productInShoppingBasket);
  let quantity = 0;
  //console.log('quantity b4 if', quantity);
  if (productInShoppingBasket) {
    quantity = productInShoppingBasket.quantity;
  }
  return quantity;
  //console.log('quantity after if', quantity);
};

export default calcQuantity;
