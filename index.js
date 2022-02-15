let hatPrice = 100;
console.log(`Hat price: $${hatPrice}`);

let bootsPrice = 100;
console.log(`Boots price: $${bootsPrice}`);

bootsPrice = 'cheap';
let names = ['Hat', 'Boots', 'Gloves'];
let prices = [];

names.push('Scarf');
names.unshift('Mittens'); // Puts 'Mittens' at the beginning.
prices.push(100);
prices.push(150);
prices.push(50.25);

// pop() takes out the last element that you put into the array.
let value = names.pop();
value = names.shift(); // Puts it at the end

names.splice(2, 0); // Puts these at 2 and 3.
filteredNames = names.slice(2, 1);

if (hatPrice === bootsPrice) {
  console.log('Prices are the same.');
} else {
  console.log('Prices are different.');
}

let totalPrice = sumPrices(
  Number(hatPrice),
  Number(bootsPrice),
  12,
  43,
  565,
  34,
  23,
  2222
);
console.log(`Total Price: $${totalPrice}`);

// ...numbers is a rest parameter.
// puts all the rest parameters into an array.
function sumPrices(...numbers) {
  // This is a function that does it for every item of the array
  // A "fat arrow" function
  const reducer = (previousValue, currentValue) =>
    previousValue +
    (Number.isNaN(Number(currentValue)) ? 0 : Number(currentValue));
  return numbers.reduce(reducer);
}

// spread operator spreads the array into individual ones
// totalPrice = sumPrices(prices[0], prices[1], prices[2]);
let totalPrice2 = sumPrices(...prices);

console.log(`Total: $${totalPrice2}`);

let isAtWork;
// If I'm at work, my name's Mr. Schaner, else my name's Steve
let myName = isAtWork == true ? 'Mr. Schaner' : 'Steve';

console.log(`First Item: ${names[0]}: $${prices[0]}`);

let combinedArray = [...names, ...prices];
// console.log(value);

combinedArray.forEach((item) => console.log(`Item: ${item}`));
