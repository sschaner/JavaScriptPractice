// An object is a collection of properties
let hat = {
  name: 'hat',
  _price: 100,
  taxIncrease: 1.2,
  priceWithTax: 100 * 1.2,

  set price(newPrice) {
    this._price = newPrice;
    this.priceWithTax = newPrice * this.taxIncrease;
  },

  get price() {
    return this._price;
  },

  writeDetails: function () {
    console.log(`${this.name}: ${this.price}, ${this.priceWithTax}`);
  },
};

// console.log(`Hat: ${hat.price}, ${hat.priceWithTax}`);
hat.writeDetails();
hat.price = 120;
// console.log(`Hat: ${hat.price}, ${hat.priceWithTax}`);
hat.writeDetails();

// boots has been assigned an object with properties of name and price
let boots = {
  name: 'boots',
  price: 200,
};

let gloves = {
  productName: 'gloves',
  price: 40,
};

let discountObject = {
  discounted: true,
  price: 90,
};

// Put every property from hat into otherHat
let otherHat = { ...hat };
// let otherHat = {
//     name: hat.name,
//     price: hat.price,
//   };
// let hatWithDiscount = { ...hat, discounted: true };
// let hatWithDiscount = {
//     name: hat.name,
//     price: hat.price,
//     discounted: true
//   };
let hatWithDiscount = { ...hat, ...discountObject }; // The price is overritten with 90

console.log(`${JSON.stringify(hatWithDiscount)}`); // Gives a JSON string

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

totalPrice = hat.price + boots.price + gloves.price + otherHat.price;
console.log(`Object Total: ${totalPrice}`);
console.log(gloves.productName); // Undefined because it was deleted
