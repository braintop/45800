numbers = set() 

numbers.add(2)
numbers.add(2)
numbers.add(3)
numbers.add(3)
numbers.add(5)

print(numbers)

numbers.remove(3)
print(numbers)

numbers.pop()
print(numbers)

for number in numbers:
    print(number)

#print(numbers[0])#error

numbers.update([6, 7, 8])
print(numbers)

new_list = [1,2,3,4,5]
new_tuple= (1,2,3,4,5)
new_set= {1,2,3,}

if 2 in new_set:
    print("2 is in the set")
else:
    print("2 is not in the set")

group1 = {1,2,3,4,5}
group2 = {4,5,6,7,8}

union = group1 | group2
print(union)

intersection = group1 & group2
print(intersection)

difference = group1 - group2
print(difference)


moshes = ["david", "moshe", "yosi", "david", "moshe"]

moshes_set = set(moshes)
print(moshes_set)


s = sum(group1)
print(s)

