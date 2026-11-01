class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def print_info(self):
        print(f"Name: {self.name}, Age: {self.age}")

    def bark(self, bark_sound):
        print(f"{self.name} is {bark_sound}")

    def sit(self):
        print(f"{self.name} is sitting")

    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}"


dog1 = Dog("Rex", 4)
dog2 = Dog("luna", 2)

print(dog1.name)
print(dog2.age)

print(dog2.name)
print(dog2.age)

dog1.print_info()
dog2.print_info()

b = input("print dog barking:")

dog1.bark(b)
dog2.sit()



dog1.age = -5 # negative age is not possible
print(dog1.age)

