# 1.ZeroDivisionError-Occurs when dividing by zero.
try:
    num=10
    res=num/0
    print(res)
except ZeroDivisionError:
    print("You cannot divide by zero")

try:
    x=int(input("Enter a number"))
    num=10
    res=num/x
    print(res)
except ValueError:
    print("Invalid input. Please enter a valid number.")
except ZeroDivisionError:
    print("You cannot divide by zero.")
except TypeError:
    print("Invalid input type. Please enter a number.")


try:
    fruits=["apple", "banana", "cherry" ] 
    mydict={
        "name":"Joel",
        "age":30
    }
    res1=fruits[0]
    res2=mydict["name"]
except IndexError:
    print("Index out of range. Please check the index value.")
except KeyError:
    print("Key not found in the dictionary. Please check the key value.")
else:
    print(res1)
    print(res2)
finally:
    print("Execution completed.This bllock of code executes regardless of whether an exception occurred or not.(True or False)")