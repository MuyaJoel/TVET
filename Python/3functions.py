#python functions are reusable blocks of code.
#python function is defined using the def keyword, followed by the function name and parentheses ().
#The code block within every function starts with a colon (:) and is indented.
#A function can take parameters (arguments) and return a value.

def fun():
    print("This is a function")

fun() # calling the function

# define a function with parameters and arguments.

def greet(name):
    print("Hello, " + name + "!")

greet("Osama")  # Output: Hello, Osama!

def evenOdd(num=7):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
print(evenOdd())


def student(fname,sname):
    print("Hello, " + fname + " " + sname + "!")

student(fname="Joel",sname="Muya")


#Arbitrary arguments, *args allows you to pass a variable number of arguments to a function.

# *args collects extra positional arguments as a tuple.
# **kwargs collects extra keyword arguments as a dictionary.

def myfun1(*args, **kwargs):

    print("Non-keyword arguments (*args):")
    for arg in args:
        print(arg)

    print("Keyword arguments (**kwargs):")
    for key, value in kwargs.items():
        print(f"{key}: {value}")

myfun1(1, 2, 3, name="Alice", age=30)



def f1():
    str="Hello, World!"
    def f2():
        print(str)
    f2()

f1()  # Output: Hello, World!

# Return statement is used to exit a function and return a value.

def sq_value(num):
    return num **2

print(sq_value(4))
