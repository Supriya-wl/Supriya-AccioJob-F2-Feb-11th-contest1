/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

let arr1 = [
  { id: 4, name: "Supriya", age: "28", marks: 90 },
  { id: 5, name: "Sushma", age: "20", marks: 85 },
  { id: 6, name: "Srujana", age: "19", marks: 45 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  //console.log(arr.map)
  console.log(arr.filter(stu => stu.marks > 50).map(stu => stu));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  //arr.forEach(stud => stud.marks > 50 (console.log(stud.name)));
  //console.log(arr.forEach(stu => stu.marks > 50));
  //console.log(arr.forEach(number => number.marks > 50);(arr.forEach(number => number.marks > 50) console.log(number));
 
  
}

function addData() {
  //Write your code here, just console.log
}

function removeFailedStudent() {
  //Write your code here, just console.log
  console.log(arr.filter(stu => stu.marks < 50).map(stu => stu));
}

function concatenateArray() {
  //Write your code here, just console.log

  console.log(arr.concat(arr1));
}
