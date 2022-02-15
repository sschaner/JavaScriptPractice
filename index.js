let hatPrice = 100;
console.log(`Hat price: $${hatPrice}`);

let bootsPrice = 100;
console.log(`Boots price: $${bootsPrice}`);

bootsPrice = 'cheap';
let name;

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

let isAtWork;
// If I'm at work, my name's Mr. Schaner, else my name's Steve
let myName = isAtWork == true ? 'Mr. Schaner' : 'Steve';
