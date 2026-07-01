
// DAY 8 - FUNCTIONS (PART B)

// Class Statistics

function classStatistics() {
   console.log("\n CLASS STATISTICS ")
   console.log("Total Students :", students.length)
   let classTotal = 0
   students.forEach(student => {
       classTotal += calculateAverage(student)
   }) 
   let classAverage = classTotal / students.length
   console.log("Class Average :", classAverage.toFixed(2))
}
classStatistics()

// Pass Percentage
function passPercentage() {
   let passCount = 0;
   students.forEach(student => {
       let failed = student.marks.some(mark => mark < 35)
       if (!failed) {
           passCount++
       }
   })
   let percentage = (passCount / students.length) * 100
   console.log("\nPass Percentage :", percentage.toFixed(2) + "%")
}
passPercentage()

// Student Ranking

function studentRanking() {
   console.log("\n========== STUDENT RANKING ==========")
   let ranking = [...students]
   ranking.sort((a, b) => {
       return calculateAverage(b) - calculateAverage(a)
   })
   ranking.forEach((student, index) => {
       console.log(
           index + 1 + ".",
           student.name,
           "-",
           calculateAverage(student).toFixed(2)
       )
   })
}
studentRanking()


// Utility Function

function totalStudents() {
   return students.length
}
console.log("\nTotal Students :", totalStudents())


// Utility Function

function findStudentByName(name) {
   let student = students.find(
       student => student.name.toLowerCase() === name.toLowerCase()
   )
   if (student) {
       console.log("\nStudent Found")
       console.log(student)
   } else {
       console.log("Student Not Found")
   }
}
findStudentByName("Mallikarjun")


// Function Returning Object

function studentSummary(student) {
   return {
       Name: student.name,
       Department: student.department,
       Average: calculateAverage(student).toFixed(2),
       Grade: calculateGrade(student)
   };
}
console.log(
   "\nStudent Summary",
   studentSummary(students[0])
)

// Arrow Function

const excellentStudents = () => {
   console.log("\n===== EXCELLENT STUDENTS =====");
   students.forEach(student => {
       if (calculateAverage(student) >= 85) {
           console.log(
               student.name,
               "-",
               calculateAverage(student).toFixed(2)
           )
       }
   })
}
excellentStudents()

// Function Expression

const departmentCount = function () {
   let report = {}
   students.forEach(student => {
       if (report[student.department]) {
           report[student.department]++
       } else {
           report[student.department] = 1
       }
   })
   console.log("\nDepartment Wise Count")
   console.log(report)
}
departmentCount()


// Higher Order Function

function executeOperation(operation) {
   operation()
}
executeOperation(function () {
   console.log("\nHigher Order Function Executed Successfully.")
})

// Callback Example

function generateReport(callback) {
   console.log("\nGenerating Report...")
   callback()
}
generateReport(function () {
   console.log("Report Generated Successfully.")
})

// Default Parameter Example

function welcomeStudent(name = "Guest") {
   console.log("\nWelcome", name)
}
welcomeStudent("Mallikarjun")
welcomeStudent()

// Rest Parameter Example
function totalMarks(...marks) {
   let total = 0
   marks.forEach(mark => {
       total += mark
   }) 
   return total
}
console.log(
   "\nTotal Marks :",    totalMarks(90, 80, 85, 95, 88)
)































