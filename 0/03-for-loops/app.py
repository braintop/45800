for i in range(10):
    print(i, end="|")
print()
for i in range(4, 10):
    print(i, end="|")

print()
for i in range(4, 10, 2):
    print(i, end="|")

print()

for i in range(10, 0, -1):
    print(i, end="|")



s = 0 
for i in range(1, 11):
    s += i
print(s)

s =0 
for i in range(1, 11):
    number = int(input("Enter a number: "))
    s += number

print(s)
print(f"The sum of the numbers is {s}")
print(f"The average of the numbers is {s / 10}")





#find max of 10 inputs using for loop
number = int(input("Enter a number: "))
max = number
for i in range(1, 10):
    number = int(input("Enter a number: "))
    if number > max:
        max = number
print(f"The max number is {max}")







