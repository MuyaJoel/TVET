// for (initialization; condition; increment) {
    // code to be executed
//   }
  
  const marks = [12, 34, 45, 56, 78, 79];
  console.log('The length of the array is ', marks.length);
  
  for (let index = 0; index < marks.length; index++) {
    console.log(marks[index]); // Outputs all values in the marks array
    if (index >= 5) {
      console.log('The program will break if index is greater or equal to 5');
      break; // Exits the loop if index is 5 or more
    }
  }