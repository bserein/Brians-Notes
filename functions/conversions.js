//Write a function to convert USD to another currency.
//Output a complete sentence like "95 USD is equivalent to ____"
let usd = 95;
function convertUsdtoYen($) {
  const yen = 113.67;
  $ *= yen;
  return $;
}
console.log(`95 USD is equivalent to ${convertUsdtoYen(usd)} yen`);
//------------------------------------------------------------
//Convert Celsius to Farenheit and output a complete sentence
const tempC = 8.5;
function convertCtoF(C) {
  return C * 1.8 + 32;
}
console.log(
  "8.5 Celsius is equivalent to " + convertCtoF(tempC) + " " + "Farenheit"
);
//--------------------------------------------------------------
//function for the gallons with a few lines
function convertGtoQ(g) {
  return (convertGtoQ = g * 4);
}
console.log(convertGtoQ(21));

// same function with more lines
function theGallons(gallons) {
  const volume = gallons * 4;
  return volume;
}
const gallon = 21;
const theAmount = theGallons(gallon);
console.log(theAmount);