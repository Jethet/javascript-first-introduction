let product = {
    name: "headphones",
    price: 100,
    discount: "10%"
};

for (let key in product){
  if (key === "discount"){
    console.log(`Already discounted by ${product.discount}.`);
    break;
  }
    else if (product.price > 100){
    let discount = 10 / 100;
    let discPrice = product.price - (product.price * discount);
    product.price = discPrice;
    } else {
    discount = 7 / 100;
    discPrice = product.price - (product.price * discount);
    product.price = discPrice;
  }
  product.discount = discount;
}

console.log(product);
