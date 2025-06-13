const initialFoodPrices = [
  { image: "🍕", name: "pizza", price: 1000 },
  { image: "🍔", name: "burger", price: 800 },
  { image: "🥪", name: "sandwich", price: 600 },
];

let result = initialFoodPrices.filter((foodObj) => foodObj.price > 700);
console.log(result);

initialFoodPrices
  .filter((foodObj) => foodObj.price > 700)
  .map((foodObj) => foodObj.price)
  .reduce((prev, next) => console.log((prev += next)));
