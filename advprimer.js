let product = function (name, price) {
  (this.name = name), (this.price = price);
};

product.prototype.toString = function () {
  return `toString: Name: ${this.name}, Price: $${this.price}`;
};

// let hat = {
//   name: 'Hat',
//   price: 100,
//   taxValue: 1.2,
//   getPriceWithTax() {
//     return Number(this.price) * Number(this.taxValue);
//   },
// };

// let boots = {
//   name: 'Boots',
//   price: 200,
// };

// let gloves = {
//   productName: 'Gloves',
//   productPrice: 20,
// };

// console.log(`Hat: $${hat.price}, $${hat.getPriceWithTax()}`);

// let productProto = {
//   toString: function () {
//     return `toString: Name: ${this.name}, Price: $${this.price}`;
//   },
// };

// Object.setPrototypeOf(hat, productProto);
// Object.setPrototypeOf(boots, productProto);

// Don't override a default prototype

class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  toString() {
    return `toString: Name: ${this.name}, Price: $${this.price}`;
  }
}

// Like inheritance in C#. extends in inheriting
class TaxedProduct extends Product {
  constructor(name, price, taxRate = 1.2) {
    // calls the super constructor with name and price. Setting the properties in the base constructor
    super(name, price);
    this.taxRate = taxRate;
  }
  // Not overriding but chaining
  toString() {
    let superParentString = super.toString();
    return `${superParentString}, With Tax: $${this.price * this.taxRate}`;
  }
}

let hat = new TaxedProduct('Hat', 100);
let boots = new product('Boots', 200);
let gloves = new product('Gloves', 50);

console.log(`toString: ${hat.toString()}`);
console.log(`toString: ${boots.toString()}`);
console.log(`toString: ${gloves.toString()}`);

console.log();
console.log('----------------------- MAPS ---------------------------');
console.log();
let data = new Map();
data.set('hat', new Product('Hat', 100));
data.set('boots', new Product('Boots', 200));
data.set(72, new Product('Gloves', 50));
data.set('gloves', 'gloves');

// let data = [
//     "hat",
//     "boots",
//     72
// ].forEach((key) => console.log(data.get(key).toString));
[...data.keys()].forEach((key) => console.log(data.get(key).toString()));

console.log();
console.log('----------------------- SETS ---------------------------');
console.log();
let hatProduct = new Product('Hat', 100);
let productArray = [];
let productSet = new Set();

for (let i = 0; i < 5; i++) {
  productArray.push(hatProduct);
  productSet.add(product);
}

console.log(productArray.length);
console.log(productSet.size);
