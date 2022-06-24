const num1 = parseInt (window.prompt("Enter first number"));
const operator = (prompt("Pick any operator: +, -, * ,/, %"));
const num2 = parseInt (window.prompt("Enter second number"));

let result;

if (operator == '+') { 
    result = num1 + num2;

} else if (operator == '-') {
    result = num1 - num2;
   
 } else if (operator == '*') {
    result = num1 * num2;
  
 } else if (operator == '/') {
    result = num1 / num2;
 } else{
 result = num1 % num2;

}

alert(result);