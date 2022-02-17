// export means other files can use this function
// default means there's only one thing that this module is exporting out
export function calculateTax(price) {
  return Number(price) * 1.2;
}

// takes our individual parameters and turns them into an array
// takes the 0 as total, takes the price, and adds it to total.
// Repeats with the previous as the new total
export default function calcTaxAndSum(...prices) {
  return prices.reduce((total, p) => (total += calculateTax(p)), 0);
}
