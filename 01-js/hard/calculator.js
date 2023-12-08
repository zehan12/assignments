/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
  calculate(string) {
    let sign = ["+", "-", "*", "/"];
    let brackets = ["(", ")"];
    let arr = [];
    let numbers = "";
    let [left, right] = [0, 0];
    console.log(left, right, "f");
    for (let i = 0; i < string.length; i++) {
      if (
        string[i].toLowerCase().charCodeAt() >= 97 &&
        string[i].toLowerCase().charCodeAt() <= 122
      ) {
        console.error("Error");
      }
      if (string[i] === " ") continue;
      if (i === string.length - 1 && typeof +string[i] === "number") {
        arr.push(string[i]);
      }
      if (!brackets.includes(string[i])) {
        if (!sign.includes(string[i])) {
          numbers += string[i];
        } else {
          arr.push(numbers, string[i]);
          numbers = "";
        }
      } else {
        console.log(string[i])
        if (string[i] === brackets[0]) left += 1;
        if (string[i] === brackets[1]) right += 1;
      }
    }

    if (right !== left) {
      // console.error("Error");
    }

    let operation = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "/": (a, b) => a / b,
      "*": (a, b) => a * b,
    };

    let acc = +arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (sign.includes(arr[i]) && arr[i + 1] !== undefined) {
        acc = operation[arr[i]](+acc, +arr[i + 1]);
      }
    }

    return string.replaceAll("  ", "") + " = " + acc;
  }
}

const cal = new Calculator(0);
console.log(cal.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7"));

module.exports = Calculator;
