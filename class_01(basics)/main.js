var _a;
console.clear(); // Clear console at start
// Question 1: Sum Of Two integers
var var1 = 12;
var var2 = 5;
var sum = var1 + var2;
console.log("Sum of ".concat(var1, " and ").concat(var2, " is ").concat(sum));
// Question 2: Relation between string and number(concatination)
var str1 = "Hello";
var num1 = 5;
// Example of type coercion: num1 is converted to string for concatenation
var concat = str1 + num1;
console.log("Concatenated string(\"".concat(str1, "\") and number(").concat(num1, "): ").concat(concat));
// Question 3: Type Coercion Example
// Example of type coercion: string is converted to number for addition
var strNum = "10";
var num = 5;
var result = strNum + num;
console.log("Result of adding string number(\"".concat(strNum, "\") and number(").concat(num, "): ").concat(result));
// Example of type coercion: string is converted to number for subtraction
var strNum2 = "10";
var num2 = 5;
var result2 = strNum2 - num2;
console.log("Result of subtracting string number(\"".concat(strNum2, "\") and number(").concat(num2, "): ").concat(result2));
// Example of type coercion: string is converted to number for multiplication
var strNum3 = "10";
var num3 = 5;
var result3 = strNum3 * num3;
console.log("Result of multiplying string number(\"".concat(strNum3, "\") and number(").concat(num3, "): ").concat(result3));
// Example of type coercion: string is converted to number for division
var strNum4 = "10";
var num4 = 5;
var result4 = strNum4 / num4;
console.log("Result of dividing string number(\"".concat(strNum4, "\") and number(").concat(num4, "): ").concat(result4));
// Question 4: Type Casting Example
// Example of type casting: string is explicitly converted to number for addition
var strNum5 = "10";
var num5 = 5;
var result5 = Number(strNum5) + num5;
console.log("Result of adding string number(\"".concat(strNum5, "\") and number(").concat(num5, ") after explicit type casting: ").concat(result5));
// Question 5: Swap Number Example
// Method 1: Using a temporary variable
var a = 10;
var b = 20;
console.log("Before swap: a = ".concat(a, ", b = ").concat(b));
var temp = a;
a = b;
b = temp;
console.log("After swap: a = ".concat(a, ", b = ").concat(b));
// Method 2: Without using a temporary variable
var c = 10;
var d = 20;
console.log("Before swap: c = ".concat(c, ", d = ").concat(d));
_a = [d, c], c = _a[0], d = _a[1];
console.log("After swap: c = ".concat(c, ", d = ").concat(d));
// Method 3: Using XOR
var e = 10;
var f = 20;
console.log("Before swap: e = ".concat(e, ", f = ").concat(f));
e = e ^ f; // e = 30 (10^20)
f = e ^ f; // f = 10 (30^20)
e = e ^ f; // e = 20 (30^10)
console.log("After swap: e = ".concat(e, ", f = ").concat(f));
// Method 4: Using addition and subtraction
var g = 10;
var h = 20;
console.log("Before swap: g = ".concat(g, ", h = ").concat(h));
g = g + h; // g = 30
h = g - h; // h = 10
g = g - h; // g = 20
console.log("After swap: g = ".concat(g, ", h = ").concat(h));
