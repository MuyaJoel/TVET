let car1 = {
    make: 'Dodge',
    model: 'Viper'
}
let car2 = { ...car1, model:'RAM', color: 'red'};
car1.color = 'green';
console.log(`${car2.make} ${car2.model} ${car2.color}`);


let car = { 
    make: 'Dodge',
    model: 'Viper'
}
// Insert line of code here.

delete car.model; 
car.make = 'Toyota'; 
car.color = 'red'; 
console.log(`${car.make} ${car.model} ${car.color}`); 
