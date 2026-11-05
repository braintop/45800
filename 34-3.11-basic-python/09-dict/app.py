dictionary = {
    "apple": 1,
    "banana": 2,
    "cherry": 3
}

print(dictionary["apple"]) # 1 

dictionary["apple"] = 10
print(dictionary)    # {"apple": 10, "banana": 2, "cherry": 3}

dictionary["apple"] = 10
print(dictionary)    # {"apple": 10, "banana": 2, "cherry": 3}


del dictionary["apple"]
print(dictionary)    # {"banana": 2, "cherry": 3}

print(dictionary.items()) # [("apple", 10), ("banana", 2), ("cherry", 3)]
for key, value in dictionary.items():
    print(key, value)

print(dictionary.keys()) # ["apple", "banana", "cherry"]


for key in dictionary.keys():
    print(key)


values = dictionary.values()# [10, 2, 3]
for value in dictionary.values():
    print(value)


print(dictionary.get("apple")) # 10