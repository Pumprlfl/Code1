"use strict";
let student1 = {
    name: "Max",
    matrikel: 123456,
    exmatriculated: false,
};
let student2 = {
    name: "Martina",
    matrikel: 654321,
    exmatriculated: true
};
student1.name = "Käse";
console.log(student1);
let students = [student1, student2];
function studentinfo(student) {
    console.log(student.name, "referd to by", student.matrikel);
}
