let product = {
    name: "headphones",
    price: 100
};

if (product.price > 100){
  let discount = 10 / 100;
  let discPrice = product.price - (product.price * discount);
  product.price = discPrice;
  product.discount = discount;
} else {
  discount = 7 / 100;
  discPrice = product.price - (product.price * discount);
  product.price = discPrice;
  product.discount = discount;
}

console.log(product.price);
console.log(product);
