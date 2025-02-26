console.clear(); // Clear console at start
// Question 1: Sum Of Two integers

let var1 = 12;

let var2 = 5;

let sum = var1 + var2;

console.log(`Sum of ${var1} and ${var2} is ${sum}`);

// Question 2: Relation between string and number(concatination)

let str1 = "Hello";

let num1 = 5;

// Example of type coercion: num1 is converted to string for concatenation
let concat = str1 + num1;

console.log(`Concatenated string("${str1}") and number(${num1}): ${concat}`);

// Question 3: Type Coercion Example

// Example of type coercion: string is converted to number for addition
let strNum = "10";
let num = 5;
let result = strNum+ num;

console.log(
  `Result of adding string number("${strNum}") and number(${num}): ${result}`
);

// Example of type coercion: string is converted to number for subtraction
let strNum2 = "10";
let num2 = 5;
let result2 = strNum2 - num2;

console.log(
  `Result of subtracting string number("${strNum2}") and number(${num2}): ${result2}`
);

// Example of type coercion: string is converted to number for multiplication
let strNum3 = "10";
let num3 = 5;
let result3 = strNum3 * num3;

console.log(
  `Result of multiplying string number("${strNum3}") and number(${num3}): ${result3}`
);

// Example of type coercion: string is converted to number for division
let strNum4 = "10";
let num4 = 5;
let result4 = strNum4 / num4;

console.log(
  `Result of dividing string number("${strNum4}") and number(${num4}): ${result4}`
);

// Question 4: Type Casting Example

// Example of type casting: string is explicitly converted to number for addition
let strNum5 = "10";
let num5 = 5;
let result5 = Number(strNum5) + num5;

console.log(
  `Result of adding string number("${strNum5}") and number(${num5}) after explicit type casting: ${result5}`
);

// Question 5: Swap Number Example

// Method 1: Using a temporary variable
let a = 10;
let b = 20;
console.log(`Before swap: a = ${a}, b = ${b}`);
let temp = a;
a = b;
b = temp;
console.log(`After swap: a = ${a}, b = ${b}`);

// Method 2: Without using a temporary variable
let c = 10;
let d = 20;
console.log(`Before swap: c = ${c}, d = ${d}`);
[c, d] = [d, c];
console.log(`After swap: c = ${c}, d = ${d}`);

// Method 3: Using XOR
let e = 10;
let f = 20;
console.log(`Before swap: e = ${e}, f = ${f}`);
e = e ^ f; // e = 30 (10^20)
f = e ^ f; // f = 10 (30^20)
e = e ^ f; // e = 20 (30^10)
console.log(`After swap: e = ${e}, f = ${f}`);

// Method 4: Using addition and subtraction
let g = 10;
let h = 20;
console.log(`Before swap: g = ${g}, h = ${h}`);
g = g + h; // g = 30
h = g - h; // h = 10
g = g - h; // g = 20
console.log(`After swap: g = ${g}, h = ${h}`);