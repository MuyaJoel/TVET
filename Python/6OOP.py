# Object Oriented programming (OOP) is a programming paradigm that uses objects and classes to structure code. 
# It allows for the creation of reusable and modular code, making it easier to manage and maintain. 
# In Python, OOP is implemented through the use of classes, which define the blueprint for objects, and instances, 
# which are specific occurrences of those classes.

#Defining a class.
#When creating classes use the class keyword followed by the class name.

class student:

    def __init__(self, name, age, grade):
        self.name=name
        self.age=age
        self.grade=grade

#how to create an instance/object of a class
student1=student("Joel",30,50)
print(student1.name)
print(student1.age)
print(student1.grade)

student2=student("Osama", 25, 85)
print(student2.name)
print(student2.age)
print(student2 .grade)

