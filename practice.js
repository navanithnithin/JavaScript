//closurs

function add1(a) {
  function add2(b) {
    function add3(c) {
      console.log(a + b + c);
    }
    return add3;
  }
  return add2;
}

const test1 = add1(100);
const test2 = test1(600);
const test3 = test2(800);

// curry function

function adder(a) {
  return function adder(b) {
    return function adder(c) {
      return a + b + c;
    };
  };
}
console.log(adder(900)(800)(1899));

//ES6

let curryFun = (a) => (b) => (c) => console.log(a + b + c);
curryFun(100)(200)(400);

// conposition functions

function addition(args) {
  return args[0] + args[1];
}
function square(val) {
  return val * val;
}
function cube(val) {
  return val * val * val;
}
function double(val) {
  return val * 2;
}

const compFun = function (f1, f2) {
  //for only two functions
  return function (a, b) {
    return f2(f1(a, b));
  };
};
const tester = compFun(addition, square);
console.log(tester(2, 4));

// for n functions

const compFun1 = function (...funs) {
  return function (...val) {
    return funs.reduce((a, b) => b(a), val);
  };
};
const newTester = compFun1(addition, square, cube, double);
console.log(newTester(2, 6));

//ES6

const composeAllES6 =
  (...funs) =>
  (val) =>
    funs.reduceRight((a, b) => b(a), val);
console.log("hi");

let varChar = composeAllES6(cube,square, double,addition);
console.log(varChar(5,7));

//IIFE immediately invoked function expression
(function name() {
  console.log("Hi buddy");
})();
