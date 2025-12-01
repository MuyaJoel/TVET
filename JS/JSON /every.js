let marks = [10, 11, 15, 20, 25, 30, 31, 35, 40, 42, 43];
const isBelowThreshold = (marks) => marks < 45;
console.log(marks.every(isBelowThreshold));
let res = marks.reduce((acc, val) => acc + val, 0);
console.log(res);
