// IIFE-stands for Immediatelly Invoked Function Expressions.
let counter = (function () {
  //private variable
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
})();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
