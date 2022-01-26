"use strict";

function counter(i, n) {
  return function () {
    return (i += n);
  };
}

const counter1 = counter(1, 5);

console.log("counter1() :>> ", counter1());
console.log("counter2() :>> ", counter1());
console.log("counter3() :>> ", counter1());
