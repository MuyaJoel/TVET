let myMap= new Map()
// Creating a map using new map()

myMap.set("name","Joel")
myMap.set("age",23)
//adding data into a map

console.log( myMap.get("name"))
//retrieving values with a specific key

console.log((myMap.has("name")))

//Iterations In a Map
console.log("Map Keys", myMap.keys())
console.log("Map Values", myMap.values())
console.log("Map Keys&Values", myMap.entries())


//Using for...of
for(let [key,value]of myMap.entries()){
    console.log(`${key}:${value}`)
}