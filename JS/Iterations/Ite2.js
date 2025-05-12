let num = 0;
while (num < 10) {
  if (num === 5) {
    // break;
    // continue;
  }
//   console.log(`Number=${num}`);
  num++;
}
// Continue statement using for loop
for(let i =0; i<9; i++){
    if(i===5){
        continue
    }
    console.log(i)
}

// For...in loop

let person={
    name:"John",
    age:30,
    location:"Nakuru"
}
console.log(person['name'])

for(let key in person){
    console.log(`${key}:${person[key]}`)
}

// dot Notation..
console.log(person.name)
console.log(person.age)


let car1={ brand: 'Toyota', model: 'Toyota TX' }
console.log(Object.keys(car1))
console.log(Object.values(car1))
console.log(car1.brand)

const car = [
    { brand: 'Toyota', model: 'Toyota TX' },
    { brand: 'Landrover', model: 'Defender' },
    { brand: 'Lexus', model: 'Lexus X5' }
    ];
console.log(car)
console.log(car[1])
console.log(Object.keys(car[1]))
console.log(car[1].brand)