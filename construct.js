function Product (name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }
  
  Product.prototype.getName = function() {
    console.log(`'Product:' ${this.name}`)
  }
  
  const box = new Product('box', 100, '0.15$');
  //console.log('box', box);
  
  function Toy (name, qty, price, color, description){
  // with 'new' JS creates empty object based on 'Product'; gets its own address in memory
    Product.call(this, name, qty, price)
  
    this.color = color;
    this.description = description;
    //JS returns this and object Toy is created
  }
  
  //connect new instance Toy to prototype (this is called extending the prototype): Toy.prototype.__proto__ === Object.prototype
  Toy.prototype = Object.create(Product.prototype);
  Toy.prototype.constructor = Toy;
  
  const toyCar1 = new Toy('Toy car', 10, '10.05$', 'red', 'Small toy car');
  console.log('toyCar1', toyCar1);
  console.log(box.getName());