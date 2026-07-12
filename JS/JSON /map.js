const initialFoodPrices = [
  { image: "🍕", name: "pizza", price: 1000 },
  { image: "🍔", name: "burger", price: 800 },
  { image: "🥪", name: "sandwich", price: 600 },
];

initialFoodPrices.map((foodObj) => {
  console.log(foodObj.image);
  console.log(foodObj.name)
  console.log(foodObj.price);
});

const totalbill1 = initialFoodPrices
  .map((foodObj) => foodObj.price)
  .reduce((prev, next) => prev + next);

console.log(`The total bill1 is ${totalbill1}`);

let totalbill2=0
initialFoodPrices.map(foodObj => foodObj.price).map(price => totalbill2 += price)

console.log(`Total bill2 is ${totalbill2}`)