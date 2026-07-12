#Inheritance 
class Animal:
    def __init__(self, name):
        self.name=name
    def infor(self):
        print("Animal name:",self.name) 

class Dog(Animal):
    def sound(self):
        print(self.name,"barks")

d=Dog("Bosco")
d.infor()
d.sound()