// Employee Management System

// Array Methods Practice
const employees = [
    {
        id: 101,
        name: "Rahul",
        department: "IT",
        salary: 60000,
        experience: 3,
        active: true
    },

    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 45000,
        experience: 5,
        active: true
    },

    {
       id: 103,
       name: "Kiran",
       department: "Finance",
       salary: 70000,
       experience: 8,
       active: false

    },

    {
       id: 104,
       name: "Sneha",
       department: "IT",
       salary: 85000, 
       experience: 6,
       active: true
    },

    {
       id: 105,
       name: "Arjun",
       department: "Marketing",
       salary: 50000,
       experience: 2,
       active: true
     
    }

]

console.log("Complete Employee List")
console.table(employees)

// forEach()
console.log("Employee Names")
employees.forEach((employee, index) => {
console.log(`${index + 1}. ${employee.name}`)

})

// map()

const employeeNames = employees.map(employee => employee.name)
console.log("Employee Names Array")
console.log(employeeNames)

// Salary Increment

const updatedSalary = employees.map(employee => {
    return {
        ...employee,
        salary: employee.salary + 5000
    }
})

console.log("Updated Salaries")
console.table(updatedSalary)

// filter()

const itEmployees = employees.filter(employee => {
    return employee.department === "IT"
})

console.log("IT Employees")
console.table(itEmployees)
const highSalaryEmployees = employees.filter(employee => {
    return employee.salary >= 60000
})

console.log("Salary Greater Than 60000")
console.table(highSalaryEmployees)

// find()
const employee = employees.find(emp => emp.id === 104)
console.log("Employee ID 104")
console.log(employee)

// some()
const hasFinanceDepartment = employees.some(emp => {
return emp.department === "Finance"
})

console.log("Finance Department Exists?")
console.log(hasFinanceDepartment)

// every()
const allActive = employees.every(emp => {
return emp.active
})
console.log("Are All Employees Active?")
console.log(allActive)

// reduce()
const totalSalary = employees.reduce((total, employee) => {
return total + employee.salary
}, 0)

console.log("Total Salary")
console.log(totalSalary)
const averageSalary = totalSalary / employees.length
console.log("Average Salary")
console.log(averageSalary)

// sort()
const salaryDescending = [...employees].sort((a, b) => {
return b.salary - a.salary
})

console.log("Salary Descending")
console.table(salaryDescending)

// reverse()
const reverseEmployees = [...employees].reverse()
console.log("Reverse Order")
console.table(reverseEmployees)

// includes()
const departments = ["IT", "HR", "Finance", "Marketing"]
console.log("Contains IT?")
console.log(departments.includes("IT"))
console.log("Contains Sales?")
console.log(departments.includes("Sales"))

// join()
const departmentList = departments.join(" | ")
console.log("Department List")
console.log(departmentList)

// slice()
const firstThreeEmployees = employees.slice(0, 3)
console.log("First Three Employees")
console.table(firstThreeEmployees)

// concat()
const newEmployees = [
    {
        id: 106,
        name: "Anjali",
        department: "Sales",
        salary: 65000,
        experience: 4,
        active: true

    }

]
const allEmployees = employees.concat(newEmployees)
console.log("After Concat")
console.table(allEmployees)

// push()
employees.push({
    id: 107,
    name: "Vikram",
    department: "Support",
    salary: 42000,
    experience: 2,
    active: true
})
console.log("After Push")
console.table(employees)

// pop()
employees.pop()
console.log("After Pop")
console.table(employees)

// shift()
employees.shift()
console.log("After Shift")
console.table(employees)

// unshift()
employees.unshift({
    id: 100,
    name: "Admin",
    department: "Management",
    salary: 100000,
    experience: 10,
    active: true

})
 
console.log("After Unshift")
console.table(employees)

// splice()
employees.splice(2, 1)
console.log("After Removing One Employee")
console.table(employees)
employees.splice(2, 0, {
    id: 108,
    name: "Deepak",
    department: "Testing",
    salary: 55000,
    experience: 3,
    active: true
})
console.log("After Adding Employee")
console.table(employees)

// Final Report
console.log("========== FINAL REPORT ==========")
console.log("Total Employees:", employees.length)
employees.forEach(emp => {
    console.log(
        `${emp.name} | ${emp.department} | ₹${emp.salary} | ${emp.experience} Years`
    )
})

 