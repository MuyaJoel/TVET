// syntax for label statements...label: statement

outerLoop: for (let i = 0; i < 5; i++) {
  innerLoop: for (let j = 0; j < 5; j++) {
    if (i === 2 && j === 2) {
      break outerLoop; // Breaks out of the outer loop
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}