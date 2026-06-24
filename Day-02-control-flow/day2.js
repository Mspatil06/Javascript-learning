// Day 2 - Control Flow and Loops
console.log("===== STUDENT RESULT SYSTEM =====");
let studentName = "Mallikarjun";
let marks = 78;
console.log("Student Name:", studentName);
console.log("Marks:", marks);
if (marks >= 90) {
   console.log("Grade: A+");
} else if (marks >= 80) {
   console.log("Grade: A");
} else if (marks >= 70) {
   console.log("Grade: B");
} else if (marks >= 60) {
   console.log("Grade: C");
} else if (marks >= 35) {
   console.log("Grade: Pass");
} else {
   console.log("Grade: Fail");
}
console.log("\n===== DAY OF WEEK =====");
let day = 5;
switch (day) {
   case 1:
       console.log("Monday");
       break;
   case 2:
       console.log("Tuesday");
       break;
   case 3:
       console.log("Wednesday");
       break;
   case 4:
       console.log("Thursday");
       break;
   case 5:
       console.log("Friday");
       break;
   case 6:
       console.log("Saturday");
       break;
   case 7:
       console.log("Sunday");
       break;
   default:
       console.log("Invalid Day");
}
console.log("\n===== MULTIPLICATION TABLE =====");
let table = 7;
for (let i = 1; i <= 10; i++) {
   console.log(`${table} x ${i} = ${table * i}`);
}
console.log("\n===== EVEN NUMBERS FROM 1 TO 20 =====");
for (let i = 1; i <= 20; i++) {
   if (i % 2 === 0) {
       console.log(i);
   }
}
console.log("\n===== SUM OF NUMBERS 1 TO 10 =====");
let sum = 0;
for (let i = 1; i <= 10; i++) {
   sum += i;
}
console.log("Total Sum =", sum);
console.log("\n===== WHILE LOOP =====");
let count = 1;
while (count <= 5) {
   console.log("Count:", count);
   count++;
}
console.log("\n===== DO WHILE LOOP =====");
let number = 1;
do {
   console.log("Number:", number);
   number++;
} while (number <= 5);
console.log("\n===== BREAK EXAMPLE =====");
for (let i = 1; i <= 10; i++) {
   if (i === 7) {
       break;
   }
   console.log(i);
}
console.log("\n===== CONTINUE EXAMPLE =====");
for (let i = 1; i <= 10; i++) {
   if (i === 5) {
       continue;
   }
   console.log(i);
}
console.log("\n===== SIMPLE ATM MENU =====");
let option = 2;
switch (option) {
   case 1:
       console.log("Check Balance");
       break;
   case 2:
       console.log("Deposit Money");
       break;
   case 3:
       console.log("Withdraw Money");
       break;
   case 4:
       console.log("Exit");
       break;
   default:
       console.log("Invalid Option");
}
console.log("\n===== NUMBER CHECKER =====");43  
let num = 15;
if (num > 0) {
   console.log("Positive Number");
} else if (num < 0) {
   console.log("Negative Number");
} else {
   console.log("Zero");
}
console.log("\n===== FACTORIAL OF 5 =====");4  
let factorial = 1;
for (let i = 1; i <= 5; i++) {
   factorial *= i;
}
console.log("Factorial =", factorial);
console.log("\n===== PATTERN =====");
for (let i = 1; i <= 5; i++) {
   let star = "";
   for (let j = 1; j <= i; j++) {
       star += "*";
   }
   console.log(star);
}