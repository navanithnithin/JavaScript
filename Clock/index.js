const viewTime = document.getElementById("time");
const button = document.getElementById("stop");
function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getMilliseconds()}`;
  viewTime.innerText = time;
}
setTimeout(() => {
  showTime(); // runs only once
}, 1000);
// showTime();

let interval = setInterval(() => {
  showTime();
}, 1000);
button.addEventListener("click", () => {
  clearInterval(interval); // inbuilt function
});

//closures

function adder(num) {
  function add(b) {
    // console.log(num + b);
    function add1(c) {
      console.log(num + b + c);
    }
    return add1;
  }
  return add;
}
const addTo5 = adder(10);
const addTo6 = addTo5(200);
addTo6(400);
// log(adder(100)(100)(100))

//currying functions

function add(a) {
  return function add(b) {
    return function add(c) {
      return a + b + c;
    };
  };
}
// or

const add1 = (a) => (b) => (c) => a + b + c;
console.log(add1(10)(20)(30));

console.log(add(5)(10)(90));

function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      return `sending email to ${to} with subject ${subject} and content ${body}`;
    };
  };
}
// console.log(sendAutoEmail("navanithnithin@gmail.com")("regsignation")("i am resigning from the job for my growth"));

let step1 = sendAutoEmail("navanithnithin@gmail.com");
let step2 = step1("assignment");
let step3 = step2("this are my assignment");

// new style in es6

const sendAutoEmail1 = (to) => (subject) => (body) =>
  `sending email to ${to} with subject ${subject} and content ${body}`;

// compositions

function addfun(a, b) {
  //fun1
  return a + b;
}
function square(val) {
  //fun2
  return val * val;
}
function multiply(args) {
  return args[0] * args[1];
}

function addSquare(a, b) {
  return square(add(a, b));
}

// solution

function composeTwofun(fun1, fun2) {
  return function (a, b) {
    return fun2(fun1(a, b));
  };
}
const task = composeTwofun(addfun, square);
console.log(task(10, 2));

//ES6 code
const c2f = (fun1, fun2) => (a, b) => fun2(fun1(a, b));
const task2 = c2f(addfun, square);

console.log(task2(10, 2));

// for multiple arguments
function compose(...fus) {
  return function (...val) {
    return fus.reduce((a, b) => b(a), val);
  };
}
const task3 = compose(multiply, square);
console.log(task3(2, 3));

//ES6

const composeAll =
  (...fus) =>
  (...val) =>
    fus.reduce((a, b) => b(a), val);

function cube(val) {
  return val * val * val;
}

const task4 = composeAll(multiply, square, cube);
console.log(task4(2, 3));

//IIFE immediately invoked function expression

(function newadderfun(a, b) {
  console.log(a + b);

  return a + b;
})(10, 60);

console.log("HH");
(function sayHi() {
  console.log("say hi");
})();

//es6

(() => console.log("i am nitin"))();

//uses

// insted of creating variable outside function we can decelar in self invoking function

// const data1 = async () => await fetch();

const atm = function (initalBalance) {
  let balance = initalBalance;
  function withdraw(atm) {
    if (atm > balance) {
      return "Are you kidding";
    } else {
      balance -= atm;
      return balance;
    }
  }
  return { withdraw };
};
const nithin = atm(7000);
console.log(nithin.withdraw(700));

//itrators

function makeRangeItrator(start = 0, end = Infinity, step = 1) {
  let nextStart = start;
  let iterationCount = 0;

  return {
    next() {
      let result;
      if (iterationCount < end) {
        result = { value: nextStart, done: false };
        nextStart += step;
        iterationCount++;
        return result;
      } else {
        return { value: iterationCount, done: true };
      }
    },
  };
}

const myiterator = makeRangeItrator(1, 10, 2);
let result = myiterator.next();
while (!result.done) {
  console.log(result.value);
  result = myiterator.next();
}

// generator function

function* generatorFun(start, end, step) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}
const test1 = generatorFun(1, 10, 1);

// for(const val of test1){
//   console.log(val);

// }

// console.log(test1);

const btn = document.getElementById("newBtn");
btn.addEventListener("click", () => {
  btn.innerText = test1.next().value;
});
