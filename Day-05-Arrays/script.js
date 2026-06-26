
// Day 5 - Arrays Practice

// Creating an Array
let fruits = ["Apple", "Banana", "Orange", "Mango"]
console.log("Original Array:")
console.log(fruits)

// Accessing Elements
console.log("\nFirst Fruit:", fruits[0])
console.log("Last Fruit:", fruits[fruits.length - 1])

// Adding Elements
fruits.push("Grapes")
fruits.unshift("Pineapple")
console.log("\nAfter Adding Elements:")
console.log(fruits)

// Removing Elements
fruits.pop()
fruits.shift()
console.log("\nAfter Removing Elements:")
console.log(fruits)

// Updating an Element
fruits[1] = "Kiwi"
console.log("\nAfter Updating:")
console.log(fruits)
 
// Length
console.log("\nTotal Fruits:", fruits.length)
 
// Loop using for
console.log("\nUsing For Loop:");
for (let i = 0; i < fruits.length; i++) {
   console.log((i + 1) + ". " + fruits[i])
}

// Loop using for...of
console.log("\nUsing for...of:")
for (let fruit of fruits) {
   console.log(fruit) 
}

// includes()
console.log("\nContains Mango?")
console.log(fruits.includes("Mango"))

// indexOf()
console.log("\nIndex of Orange:")
console.log(fruits.indexOf("Orange"))

// Slice
let someFruits = fruits.slice(1, 3)
console.log("\nSlice:")
console.log(someFruits)

// Reverse
console.log("\nReverse:")
console.log([...fruits].reverse())

// Sort
console.log("\nSorted:")
console.log([...fruits].sort())

// Join
console.log("\nJoined String:")
console.log(fruits.join(" | "))

// Array of Numbers
let numbers = [12, 25, 8, 30, 45, 60]
console.log("\nNumbers:")
console.log(numbers)

// Sum of Array
let sum = 0
for (let number of numbers) {
   sum += number
}
console.log("Sum =", sum)

// Maximum Number
let max = numbers[0]
for (let number of numbers) {
   if (number > max) {
       max = number
   }
}
console.log("Maximum =", max)

// Minimum Number
let min = numbers[0]
for (let number of numbers) {
   if (number < min) {
       min = number
   }
}
console.log("Minimum =", min)

// Even Numbers
console.log("\nEven Numbers:")
for (let number of numbers) {
   if (number % 2 === 0) {
       console.log(number)
   }
}

// Odd Numbers
console.log("\nOdd Numbers:")
for (let number of numbers) {
   if (number % 2 !== 0) {
       console.log(number)
   }
}

// Student Marks Example
let studentMarks = [85, 90, 78, 95, 88]
let total = 0
for (let mark of studentMarks) {
   total += mark
}
let average = total / studentMarks.length   
console.log("\nStudent Marks:")
console.log(studentMarks)
console.log("Total Marks =", total)
console.log("Average Marks =", average)
