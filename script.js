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
  
  console.log(arr.filter(stu => stu.marks > 50).map(stu => stu));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr => {
    if (arr.marks > 50) {
      console.log(arr);
//       .name + ' ' + arr.marks
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newData = {
    id: 4,
    name: "susan",
    age: 20,
    marks: 45
  };
  arr.push(newData);
  console.log(newData)
}

function removeFailedStudent() {
  //Write your code here, just console.log
  console.log(arr.filter(stu => stu.marks < 50).map(stu => stu));
}

function concatenateArray() {
  //Write your code here, just console.log

  console.log(arr.concat(arr1));
}
