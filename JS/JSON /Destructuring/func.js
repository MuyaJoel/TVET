const displayUser = ({ name = "Anonymous", age = 18, ...details }) => {
  console.log(`${name} is ${age} years Old`);
  console.log("Other details:", details);
};
let user1 = {
  name: "Joel",
  age: 23,
  location: "Makueni",
  job: "Software Developer",
};
let user2={
    'name':'Muya',
    location:'Makueni'
}
displayUser(user2)