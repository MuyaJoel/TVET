# Lists
fruits = ["apple", "banana", "cherry", "grapes", "mango"]
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'grapes', 'mango']

OsamaInfor=["Osama",24,"Python Developer"]

# using a list() constructor to convert a tuple into a list.
tup=("Osama",24,"Python Developer")
str="I am learning Python Development"
print(list(tup))


#Iterating over a list

for fruit in fruits:
    print(fruit)

#Nested Lists
number=[[1,2,3],[4,5,6],[7,8,9]]
print(number)

#Adding Items into a list
fruits.append("orange")
fruits.extend([100,30])
fruits.insert(2,300) # adds an item to a specific position.
print(fruits)

#Tuples
joelinfor=("Joel",25,"Python Developer",{"address":"New York","phone":"123-456-7890"})
print(joelinfor)  # Output: ('Joel', 25, 'Python Developer


#python Dictionary
student={
    "name":"Osama",
    "age":25,
    "course":"Javascript Development"
    }

print(student)  # Output: {'name': 'Osama', 'age': 25, 'course': 'Javascript Development'}

#Accessing Dictionary values
print(student["name"])  
print(student.get("age")) #output 25

#updating items of a dictionary
student["name"]="Joel"
print(student) 

#iterate a Dictionary
for key in student:
    print(key, student[key])


#python sets
fruits_set = {"apple", "banana", "cherry"}
print(fruits_set)  # Output: {'banana', 'cherry', 'apple'} 