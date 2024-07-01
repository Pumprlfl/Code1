interface StudentData {
    name: string,
    matrikel: number,
    exmatriculated: boolean,
}

let student1: StudentData = {
    name: "Max",
    matrikel: 123456,
    exmatriculated: false,
}

let student2: StudentData = {
    name: "Martina",
    matrikel:654321,
    exmatriculated: true
}

student1.name = "Käse";
console.log(student1);

let students: StudentData[] =[student1, student2];

function studentinfo(student: StudentData): void {
    console.log(student.name, "referd to by", student.matrikel, "is" ,student.exmatriculated)
}

for(let i: number = 0; i<students.length; i++){
    studentinfo(students[i]);
}