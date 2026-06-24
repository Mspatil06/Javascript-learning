// Day 3 - Functions and Scope
console.log("===== Function Declaration =====");
function greet() {
   console.log("Welcome to JavaScript Functions");
}
greet();
console.log("\n===== Function with Parameters =====");dzx 
function greetUser(name) {
   console.log("Hello, " + name);
}
greetUser("Mallikarjun");
greetUser("Rahul");
console.log("\n===== Function with Return Value =====");
function add(a, b) { 
   return a + b;
}
let result = add(10, 20);
console.log("Sum:", result);
console.log("\n===== Function Expression =====");
const multiply = function(a, b) {
   return a * b;
}; 
console.log("Multiplication:", multiply(5, 4));
console.log("\n===== Arrow Function =====");
const square = (num) => {
   return num * num;
};
console.log("Square:", square(6));
console.log("\n===== Short Arrow Function =====");
const cube = num => num * num * num;
console.log("Cube:", cube(3));
console.log("\n===== Global Scope ====="); 
let company = "JavaScript Learning";
function showCompany() {
   console.log("Company:", company);
}
showCompany();
console.log("\n===== Local Scope =====");
function showMessage() {
   let message = "This is a local variable";
   console.log(message);
}
showMessage();
console.log("\n===== Practice Program 1 =====");
function checkEvenOdd(number) {
   if (number % 2 === 0) {
       return "Even Number";
   }
   return "Odd Number";
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(15));
console.log("\n===== Practice Program 2 =====");
function findLargest(a, b) {
   if (a > b) {
       return a;
   }
   return b;
}
console.log("Largest Number:", findLargest(50, 80));
console.log("\n===== Practice Program 3 =====");
function calculateGrade(marks) {
   if (marks >= 90) {
       return "A Grade";
   } else if (marks >= 75) {
       return "B Grade";
   } else if (marks >= 60) {
       return "C Grade";
   } else {
       return "Fail";
   }
}
console.log("Grade:", calculateGrade(85));
console.log("\n===== Practice Program 4 =====");
function calculateArea(length, width) {
   return length * width;
}
console.log("Rectangle Area:", calculateArea(10, 5));
console.log("\n===== Practice Program 5 =====");
function sayGoodMorning() {
   return "Good Morning!";
}
console.log(sayGoodMorning());