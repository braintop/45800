numbers = [1, 2, 3, 4, 5]

evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)


result = []
for x in numbers:
    if x % 2 == 0:
        result.append(x)

result = [x for x in numbers if x%2==0]
print(result)

squers = [x**2 for x in numbers]




# 4)  [result_expression if condition else other_expression for x in iterable]
numbers = [1, 2, 3, 4, 5]

even_numbers = [x for x in numbers if x % 2 == 0]
print(even_numbers)


#  [result_expression for x in iterable1 for y in iterable2]
pairs = []

for i in [1, 2, 3]:
    for j in [10, 20]:
        pairs.append((i, j))
print(pairs)



pairs = [(i,j) for i in [1, 2, 3] for j in [10, 20]]
print(pairs)



#1 
squarse_evens1 = [x**2 for x in numbers if x%2==0]


evens = [x for x in numbers if x%2==0]
squarse_evens2 = list(map(lambda x: x**2, evens))


#2 
grades = [85, 90, 40, 92, 32]
results = ["pass" if x>=50 else "fail" for x in grades]
print(results)

reuslts = list(zip(grades, results))
print(reuslts)


xs = [1, 2, 3, 4]
ys = [10, 15, 20]

pairs = [(x, y) for x in xs for y in ys if x*y> 30]
print(pairs)