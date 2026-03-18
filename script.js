
function calculateGrade(average) {
    if (average >= 90) {
        return "A Grade";
    } 
    else if (average >= 75) {
        return "B Grade";
    } 
    else if (average >= 60) {
        return "C Grade";
    } 
    else if (average >= 50) {
        return "D Grade";
    } 
    else {
        return "Fail";
    }
}

function studentResult() {

    let name = prompt("Enter Student Name:");

    let subject1 = parseInt(prompt("Enter marks for Subject 1:"));
    let subject2 = parseInt(prompt("Enter marks for Subject 2:"));
    let subject3 = parseInt(prompt("Enter marks for Subject 3:"));
    let subject4 = parseInt(prompt("Enter marks for Subject 4:"));
    let subject5 = parseInt(prompt("Enter marks for Subject 5:"));

    let total = subject1 + subject2 + subject3 + subject4 + subject5;

    let average = total / 5;

    let grade = calculateGrade(average);

    console.log("Student Name: " + name);
    console.log("Total Marks: " + total);
    console.log("Average Marks: " + average);
    console.log("Grade: " + grade);
}

studentResult();