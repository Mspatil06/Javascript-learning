// Day 9 DOM Manipulation

// Selecting Elements
let card = document.getElementById("studentCard")
let name = document.getElementById("studentName")
let department = document.getElementById("department")
let age = document.getElementById("age")
let grade = document.getElementById("grade")
let subjectList = document.getElementById("subjects")

// Change Name
function changeName(){
   name.innerText="Rahul Sharma"
}

// Change Card Color
function changeColor(){
   card.style.backgroundColor="lightblue"
}

// Increase Font
function increaseFont(){
   card.style.fontSize="22px"
}

// Add Subject
function addSubject(){
   let subject=document.createElement("li")
   subject.innerText="React JS"
   subjectList.appendChild(subject)
}

// Remove Subject
function removeSubject(){   }

// Hide Card
function hideCard(){
   card.style.display="none"
}

// Show Card
function showCard(){
   card.style.display="block"
}


// Change Grade
function changeGrade(){
   grade.innerHTML="<b>Grade : A+</b>"
}

// Change Department
function changeDepartment(){
   department.innerText="Department : AI & ML"
}

// Reset
function resetCard(){
   name.innerText="Mallikarjun Patil"
   department.innerText="Department : CSE"
   age.innerText="Age : 22"
   grade.innerText="Grade : A"
   card.style.backgroundColor="white"
   card.style.fontSize="16px"
   card.style.display="block"
   subjectList.innerHTML=`
<li>Java</li>
<li>Python</li>b 
<li>JavaScript</li>
   `
}

// getAttribute Example 
console.log(card.getAttribute("id"))

// setAttribute Example
card.setAttribute("title","Student Information")

// querySelector Example
let heading=document.querySelector("h1")
heading.style.color="darkblue"

// querySelectorAll Example
let buttons=document.querySelectorAll("button")
buttons.forEach(function(button){
   button.style.cursor="pointer"
})

// Display Total Subjects
function totalSubjects(){
   console.log(
       "Total Subjects :",
       subjectList.children.length
   )
}
totalSubjects()

// Add Multiple Subjects
function addMultipleSubjects(){
   let subjects=[
       "HTML",
       "CSS",
       "Node JS"
   ]
   subjects.forEach(function(item){
       let li=document.createElement("li")
       li.innerText=item
       subjectList.appendChild(li)
   })
}
addMultipleSubjects()

// Remove First Subject
function removeFirstSubject(){
   if(subjectList.firstElementChild){
       subjectList.firstElementChild.remove()
   }
}
removeFirstSubject()

// Change Heading
heading.innerText="JavaScript DOM Practice"

// Final Message
console.log("Day 9 DOM Manipulation Completed Successfully")

 
 
 












