// ===============================
// Student Manager Program
// ===============================

// Array of student objects
let students = [
    {
        name: "Dhanusha",
        marks: [80, 85, 90]
    },
    {
        name: "Rahul",
        marks: [70, 75, 80]
    },
    {
        name: "Anu",
        marks: [90, 92, 88]
    }
];


// Function to calculate average marks
function calculateAverage(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let average = sum / marks.length;
    return average;
}


// Function to assign grade
function getGrade(avg) {
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else return "C";
}


// Display student details
console.log("===== Student Report =====");

for (let i = 0; i < students.length; i++) {

    let student = students[i];

    let avg = calculateAverage(student.marks);
    let grade = getGrade(avg);

    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", avg.toFixed(2));
    console.log("Grade:", grade);
    console.log("-------------------------");
}


// ===============================
// Bonus: Add New Student (Optional)
// ===============================

let newName = prompt("Enter student name:");
let m1 = Number(prompt("Enter mark 1:"));
let m2 = Number(prompt("Enter mark 2:"));
let m3 = Number(prompt("Enter mark 3:"));

let newStudent = {
    name: newName,
    marks: [m1, m2, m3]
};

students.push(newStudent);

console.log("===== Updated Student List =====");

for (let i = 0; i < students.length; i++) {

    let student = students[i];
    let avg = calculateAverage(student.marks);
    let grade = getGrade(avg);

    console.log("Name:", student.name);
    console.log("Average:", avg.toFixed(2));
    console.log("Grade:", grade);
    console.log("-------------------------");
}