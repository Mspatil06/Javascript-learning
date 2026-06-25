// ===============================
// Day 4 - JavaScript Objects
// ===============================
// Student Management System
const student = {
   id: 101,
   name: "Mallikarjun",
   age: 23,
   course: "Computer Science",
   city: "Bangalore",
   marks: {
       JavaScript: 85,
       React: 90,
       Python: 88
   },
   displayDetails() {
       console.log("----- STUDENT DETAILS -----");
       console.log("ID:", this.id);
       console.log("Name:", this.name);
       console.log("Age:", this.age);
       console.log("Course:", this.course);
       console.log("City:", this.city);
   },
   displayMarks() {
       console.log("\n----- STUDENT MARKS -----");
       console.log("JavaScript:", this.marks.JavaScript);
       console.log("React:", this.marks.React);
       console.log("Python:", this.marks.Python);
   },
   calculateAverage() {
       const total =
           this.marks.JavaScript +
           this.marks.React +
           this.marks.Python;
       const average = total / 3;
       console.log("\nTotal Marks:", total);
       console.log("Average Marks:", average.toFixed(2));
   }
};
// Calling Methods
student.displayDetails();
student.displayMarks();
student.calculateAverage();

// =====================================
// Adding New Properties
// =====================================
student.email = "mallikarjun@gmail.com";
student.phone = "9876543210";
console.log("\nAfter Adding New Properties:");
console.log(student);

// =====================================
// Updating Existing Properties
// =====================================
student.city = "Hyderabad";
console.log("\nAfter Updating City:");
console.log(student);

// =====================================
// Deleting Property
// =====================================
delete student.phone;
console.log("\nAfter Deleting Phone:");
console.log(student);

// =====================================
// for...in Loop
// =====================================
console.log("\n----- USING for...in LOOP -----");
for (let key in student) {
   if (typeof student[key] !== "function") {
       console.log(key, ":", student[key]);
   }
}

// =====================================
// Object.keys()
// =====================================
console.log("\n----- OBJECT KEYS -----");
console.log(Object.keys(student));

// =====================================
// Object.values()
// =====================================
console.log("\n----- OBJECT VALUES -----");
console.log(Object.values(student));

// =====================================
// Object.entries()
// =====================================
console.log("\n----- OBJECT ENTRIES -----");
console.log(Object.entries(student));

// =====================================
// Employee Object Project
// =====================================
const employee = {
   empId: 5001,
   empName: "Ravi Kumar",
   department: "Software Development",
   salary: 50000,
   displayEmployee() {
       console.log("\n----- EMPLOYEE DETAILS -----");
       console.log("Employee ID:", this.empId);
       console.log("Employee Name:", this.empName);
       console.log("Department:", this.department);
       console.log("Salary:", this.salary);
   },
   increaseSalary(amount) {
       this.salary += amount;
       console.log("\nSalary Increased Successfully");
       console.log("Updated Salary:", this.salary);
   }
};
employee.displayEmployee();
employee.increaseSalary(10000);

// =====================================
// Product Inventory Object
// =====================================
const product = {
   productId: 1001,
   productName: "Laptop",
   brand: "Dell",
   price: 65000,
   quantity: 10,
   displayProduct() {
       console.log("\n----- PRODUCT DETAILS -----");
       console.log("Product ID:", this.productId);
       console.log("Product Name:", this.productName);
       console.log("Brand:", this.brand);
       console.log("Price:", this.price);
       console.log("Quantity:", this.quantity);
   },
   calculateStockValue() {
       const stockValue = this.price * this.quantity;
       console.log("Total Stock Value:", stockValue);
   }
};
product.displayProduct();
product.calculateStockValue();

// =====================================
// Nested Object Example
// =====================================
const company = {
   companyName: "Tech Solutions",
   address: {
       city: "Bangalore",
       state: "Karnataka",
       pincode: 560001
   },
   employees: 150
};
console.log("\n----- COMPANY DETAILS -----");
console.log("Company:", company.companyName);
console.log("City:", company.address.city);
console.log("State:", company.address.state);
console.log("Employees:", company.employees);
