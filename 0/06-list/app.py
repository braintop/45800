import random
x = random.randint(1, 100)



numbers = [1, 20, 3, 4, 2]
print(numbers)
print(numbers[0])
print(numbers[1])
print(numbers[2])
print(numbers[3])
print(numbers[4])

numbers[0] = 10
print(numbers)

numbers.append(6)
print(numbers)

numbers.insert(2, 100)
print(numbers)

numbers.remove(3)
print(numbers)

x= numbers.pop()# remove the last element and return it
print(numbers)

x = numbers.pop(2)# remove the element at index 2 and return it

numbers.sort()
print(numbers)