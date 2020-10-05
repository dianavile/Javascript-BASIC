/*jshint esversion: 6 */

//ex 8
function calculator(operator, value1, value2) {
  if (operator == "add") {
    console.log(value1 + value2);
  } else if (operator == "substract") {
    console.log(value1 - value2);
  } else if (operator == "multiply") {
    console.log(value1 * value2);
  } else {
    console.log("Unknown function. With this calculator you can only add, substract or multiply!");
  }
}

calculator("add", 2, 3);

