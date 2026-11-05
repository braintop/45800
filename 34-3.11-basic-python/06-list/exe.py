import random
numbers = []
for i in range(100):
    numbers.append(random.randint(1, 200))
print(len(numbers))

number = int(input("Enter a number: "))

if number in numbers:
    print(f"The number {number} is in the list")
else:
    print(f"The number {number} is not in the list")


x= int(input("Enter a number: ")
count = 0
#1 index loop 
for i in range(len(numbers)):
    if numbers[i] == x:
        count += 1


#2 value loop 
for num in numbers:
    if num == x:
        count += 1

print(f"The number {x} appears {count} times in the list")
# 3  method דרך נוספת 
print(numbers.count(x))

for num in numbers:
    if num == x:
        numbers.remove(num)

y = int(input("Enter a number: "))
new_numbers = []
for num in numbers:
    if num > y:
        new_numbers.append(num)

print(new_numbers)

