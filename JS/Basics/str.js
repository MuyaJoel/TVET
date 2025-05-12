let myName = "John";
let myAge = 23;
console.log("My name is ${myName} and i am ${myAge} years old.");
console.log(`My name is ${myName} and i am ${myAge} years old.`);

let str1="Mom"

function myFun(str){
    let newStr=str.toLowerCase().split('').reverse().join('')
    if(newStr===str.toLowerCase()){
        console.log(` ${newStr} is palindrome`)
    }else{
        console.log(` ${newStr} is not palindrome`)
    }
}
myFun(str1)