let fruits = ["apples", "mangoes", "Cherry", "grapes"];
fruits.forEach((fruit) => console.log(fruit));
//map
const toUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(toUpper);
//some
let isPresent = fruits.some((fruit) => fruit === "mangoes");
if (isPresent) {
    console.log("found Mango",isPresent);
}
