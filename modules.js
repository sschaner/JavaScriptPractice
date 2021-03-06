import calcTaxAndSum, { calculateTax } from './tax'; // There's only one thing to import so we can call it anything
import { printDetails, applyDiscount } from './utils';

class Product {
  constructor(name, price) {
    (this.id = Symbol()), (this.name = name), (this.price = price);
  }
}

let product = new Product('Hat', 100);
applyDiscount(product, 10);
let taxedPrice = calculateTax(product.price);
// The toFixed() changes it to a string so be careful
// console.log(`Name: ${product.name}, Taxed Price: $${taxedPrice.toFixed(2)}`);

// taxedPrice = calcTaxAndSum(product.price, 230, 34, 12);
// console.log(`Total Taxed Price: $${taxedPrice.toFixed(2)}`);

printDetails(product);
