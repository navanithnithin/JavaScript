// java, typescript is a strongly typed programing language
// js is a lossely typed programming language
console.log("this is external linking");

var num1 = 1;
console.log(num1);
var num2 = "nithin";
console.log(num2);
console.log(num1 + num2);

// var glogal scope

console.log(age); // undeclear
var age;

// const and let having block scope or local scope
// const variable can not be redeclar
// const can not be undefined

// data types
// Number
// String
// Boolean
// null
// undefined
// Object

// Number
let n = 3.14;
let n1 = 45;
console.log(n1 + n);

// String

let str = "Nithin s";
let str1 = " is a hard worker";
console.log(str + str1);

let value = null;

const obj = {
  FirstName: "Kiran",
  age: 24,
  place: "bengaluru",
};
console.log(obj);

console.log("345" + 999);
console.log("345" + "999");
console.log("345" * 1);
console.log("345" * 2);
console.log("345" * "55");
// string * number =number
console.log("7" * "7"); // --> gives a number
console.log("s" * 8); // -->NaN not a number
console.log(typeof 8); // --> type of operator
console.log(typeof 8);

// purple color in console indicates a Number

let voteAge = 57;
if (voteAge >= 80) {
  console.log("can't vote");
} else if (voteAge >= 18) {
  console.log("can vote");
} else {
  console.log("is a minor");
}
console.log(
  voteAge > 18 ? (voteAge <= 80 ? "can vote" : "can't vote") : "is a minor"
); // turnory operator
caseNum = 2;
switch (caseNum) {
  case 1:
    {
      console.log("Nithin");
    }
    break;
  case 2:
    {
      console.log("Kiran");
    }
    break;
  case 3:
    {
      console.log("Rahul");
    }
    break;
  case 4:
    {
      console.log("praveen");
    }
    break;
}

//logical operator

//&& --> and operator
// || --> or operator
// ! --> not operator

// loops

let newStr = "vikramadytha";
let arr = [1, 2, 3, 4, 16, 5, 6, 24, 7, 90];
for (let i = 0; i < newStr.length; i++) {
  console.log(newStr[i]);
}
// for (let i=0; i< arr.length; i++){
//     console.log(arr[i]);

// }

let v = "234";
console.log(v * 1);
console.log(parseInt(v));
console.log(v);

let v1 = 0;
// do {
//   v1 = prompt("Gusses a number : ")*1;
//   v1--
// } while (v1==66)

// functions

function sum() {
  let sumValue = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumValue += arguments[i];
  }
  // console.log(sumValue);
  return sumValue;
}
sum(3, 5, 6, 100, 67, 8, 99, 8, 8, 8, 99, 4, 5, 567, 7, 34); // parameter

function add(a, b) {
  //arguments
  console.log(a + b);
  return a + b;
}
add(9, 30); //parameter
console.log(add(3, 77));

function multi(...numbers) {
  //spread operator
  value = 1;
  for (let i = 0; i < numbers.length; i++) {
    value *= numbers[i];
  }
  return value;
}
console.log(multi(3, 5, 6, 7, 4, 10));
// arrow function

const arrowFun = (a, b) => {
  // arguments key word is not found
  console.log(a + b);
};
arrowFun(7, 7);
const newArrow = (a, b) => a + b;
console.log(newArrow(8, 8));

//hoisting
hoistFun();
function hoistFun() {
  console.log("Hoisting is allowed normal function");
}

// const hoistFun=()=>{
//     console.log("Hoisting is not allowed in arrow functions");

// }

//this key word
const obj1 = {
  value: 90,
  gender: "Rahul",
  myfun: function () {
    console.log(this); //block scope
  },
};

const obj2 = {
  value: 90,
  gender: "Rahul",
  myfun: () => {
    console.log(this); // window scope
  },
};
obj1.myfun();
obj2.myfun();

// a function which take a function as an arugments is called heigh order function

function addingTwoNumber(a, b, callBack) {
  let result = a + b; // higher order function
  callBack(result);
}
function callBack(val) {
  console.log(val); // callback function
}
// addingTwoNumber(100,300,callBack)
addingTwoNumber(900, 300, (val) => console.log(val));

function multiTwoNumbers(a, b, callBack) {
  let result = a * b;
  callBack(result);
  return () => console.log(result);
}
let newFun = multiTwoNumbers(500, 900, () => {});
newFun();

// array

const arr1 = ["nithin", "kiran", "rahul"];
arr1.push("ram");
console.log(arr1.indexOf("nithin"));
console.log(arr1);
console.log(arr1.pop());

const arr2 = [5, "five", true, "😊"]; // we can have hetrogenous datatypes
console.log(arr2);
console.log(arr2.reverse());

// high order function in array
let arr3 = [2, 4, 6, 8, 9, 12, 34, 56, 59];
let v5 = arr3.forEach((element) => {
  return element * 2; // it will not return anything
});
let v4 = arr3.map((element) => {
  return element * 2; //           it will return a new array
});

console.log(v5);
console.log(v4);

let ans = arr3.find((num) => num === 12);
let ans1 = arr3.findIndex((num) => num === 12);
let ans2 = arr3.includes(55);
let ans3 = arr3.filter((num) => num % 2 == 0);
console.log(ans);
console.log(ans1);
console.log(ans2);
console.log(ans3);

let ans4 = arr3.slice(0, 5);
console.log(ans4);
console.log(arr3);
let ans5 = arr3.splice(2, 6); //will cut a part of array or remove part of array
console.log(ans5);
console.log(arr3);
// alert("this is main page")

// console.log((document.title = "nithin"));
// console.log(document.write("This is hacked"));
// const promtName = prompt("What is your name ? ");
// window.document.write(promtName);

// DOM Document Object Model

const body = document.querySelector("body");
// console.log((body.innerHTML = "<h1> Hacked!!<h1/>")); //it will override the dome

// queryselector will select only first element and queryselectorAll will select all elements

const idselect = document.querySelector("#userName");
console.log((idselect.innerText = "Rahul"));

const classSelect = document.querySelector(".block");
console.log(
  (classSelect.innerHTML = "<h1>Ramakrishna mission vidyamandira</h1>")
);
const child = document.querySelector("div");
console.log(child.children);
console.log(child.parentElement.children);

const h2Tag = document.querySelectorAll("h3");
h2Tag.forEach((tag) => {
  console.log((tag.innerText = "Fullstack we development"));
});

// getElementById

const idselecter = document.getElementById("check1");
console.log((idselecter.innerText = "Virat kohli"));
idselecter.classList.add("red-color", "brd"); // adding class in js
let x = 15;
let y = x; // call by value
x = 40;
console.log(x);
console.log(y);

obj4 = { name: "nithin", age: 24, package: "24.5LPA" };
obj5 = obj4; // call by reference
obj4.name = "Nithin S";
console.log(obj5);
console.log(obj4);
idselect.classList.remove("brd");
console.log();
idselecter.style.background = "green"; // addind inline style using javascript
// idselecter.setAttribute("area","734") //setting attribute to given tag
// idselect.remove()  //used to remove elements

const newvar = document.getElementsByClassName("block");
console.log(newvar);
for (let i = 0; i < newvar.length; i++) {
  console.log(newvar.item(i).style.background="blue");
}

