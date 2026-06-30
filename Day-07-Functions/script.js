// DAY 7 - FUNCTIONS

// PROJECT: COLLEGE MANAGEMENT SYSTEM

console.log("========== COLLEGE MANAGEMENT SYSTEM ==========")
let students = []

// Add Student 
function addStudent(id, name, department, ...marks) {
    let student = {
    id,
    name,
    department,
    marks 
    } 
    students.push(student)
    console.log(name + " added successfully.")
}

// Display Students
function displayStudents() {
    console.log("\n------ STUDENT LIST ------")
    students.forEach((student) => {
        console.log(
            `ID: ${student.id} | Name: ${student.name} | Department: ${student.department}`
        )
    })
}
   
// Search Student
function searchStudent(id) {
    let student = students.find((s) => s.id === id)
    if (student) {
        console.log("\nStudent Found")
        console.log(student);
    } else {
        console.log("Student Not Found")
    }
}

// Calculate Total
function calculateTotal(student) {
  let total = 0
    for (let mark of student.marks) {
        total += mark
}
    return total

}

// Calculate Average
function calculateAverage(student) {
    return calculateTotal(student) / student.marks.length
}

// Grade
function calculateGrade(student) {
    let average = calculateAverage(student)
    if (average >= 90)

        return "A+"

    if (average >= 80)

        return "A"

    if (average >= 70)

        return "B"

    if (average >= 60)

        return "C"

    return "Fail"
}

// Print Report Card
function printReport(id) {
    let student = students.find((s) => s.id === id)
        if (!student) {
        console.log("Student Not Found")
        return
    }
    console.log("\n========== REPORT CARD ==========")

    console.log("ID :", student.id)

    console.log("Name :", student.name)

    console.log("Department :", student.department)

    console.log("Marks :", student.marks.join(", "))

    console.log("Total :", calculateTotal(student))

    console.log("Average :", calculateAverage(student).toFixed(2))

    console.log("Grade :", calculateGrade(student))


}

// Update Marks
function updateMarks(id, subjectIndex, newMark) {

    let student = students.find((s) => s.id === id)
    if (!student) {
     console.log("Student Not Found")
     return

    }

    student.marks[subjectIndex] = newMark

    console.log("Marks Updated Successfully.")

}

// Sample Data

addStudent(101, "Mallikarjun", "CSE", 90, 88, 95, 91, 84)

addStudent(102, "Rahul", "ECE", 70, 80, 76, 81, 75)

addStudent(103, "Priya", "ISE", 95, 92, 98, 90, 96)

displayStudents()

searchStudent(102)

printReport(101)

updateMarks(102, 2, 90)

printReport(102)



