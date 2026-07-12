# File handling is an import part of programming which allows us to create, read, update and delete files. In Python to handle data we use open() built-in function.
# Syntax
# open('filename', mode) # mode(r, a, w, x, t,b)  could be to read, write, update
# "r" - Read - Default value. Opens a file for reading, it returns an error if the file does not exist
# "a" - Append - Opens a file for appending, creates the file if it does not exist
# "w" - Write - Opens a file for writing, creates the file if it does not exist
# "x" - Create - Creates the specified file, returns an error if the file exists
# "t" - Text - Default value. Text mode
# "b" - Binary - Binary mode (e.g. images)


#Reading files
# read(): read the whole text as string. If we want to limit the 
# number of characters we want to read, we can limit it by passing int value to the read(number) method.

f=open("test.txt", "r") # open file in read mode
# print(f.read())
# f.close() # close the file after reading

# print(f.readlines())
f.close() # close the file after reading

# Write Mode (w): Overwrites the file. If the file already exists, all its previous content is completely erased.
# Append Mode (a): Preserves the file. New data is added to the very end of the file 
# without altering existing content.

with open("test.txt", "a") as f:
    f.write("\nThis is a new line added to the file.")
    
with open("test.txt", "w") as f:
    f.write("This is a new content that overwrites the previous content.")

with open("test.txt", "r") as f:
    print(f.read())

with open("test1.txt", "x") as f:
    f.write("This is a new file created using 'x' mode.")
