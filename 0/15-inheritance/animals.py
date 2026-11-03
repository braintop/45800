class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age


    def print_info(self):
        print(f"Name: {self.name}, Age: {self.age}")

class Dog(Animal):
    def __init__(self, name, age, sound):
        super().__init__(name, age)
        self.sound = sound
    
    def bark(self):
        print(f"{self.name} is making {self.sound}")

    def print_info(self):
        print(f"{self.name} is a dog and is {self.age} years old and makes {self.sound}")



a1 = Animal("Rex", 10)
a1.print_info()
d1 = Dog("Rex", 10, "woof")
d1.print_info()
d1.bark()




