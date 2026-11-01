class Person:
    def __init__(self, name, age, score):
        self.name = name
        self.age = age
        self.score = score
    def print_info(self):
        print(f"Name: {self.name}, Age: {self.age}, Score: {self.score}")

    def max_jump(self):
        return self.score * 10

    


s1 = Person("John", 30, 100)# s1 is an instance of the Person class. person is the object.
roe = Person("roe", 25, 90)
david = Person("david", 20, 80)
print(s1)
print(s1.name)
print(s1.age)
print(s1.score)
print(roe)
print(roe.name)
print(roe.age)
print(roe.score)
print(david)
print(david.name)
print(david.age)
print(david.score)

print(s1.max_jump())
print(roe.max_jump())
print(david.max_jump())



