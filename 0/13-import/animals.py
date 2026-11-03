class Dog:

    vetrinary_name = "Oren malka"
    counter = 0
    def __init__(self, name, age):
        self.name = name
        self.__age = age #__ is private attribute
        Dog.counter += 1
   

    @staticmethod
    def get_price():
        return Dog.counter * 100

    
    @property  #getter  
    def age(self):
        return self.__age

    @age.setter #setter
    def age(self, value):
        if value > 0:
            self.__age = value
        else:
            print("Age must be positive")

    def walk(self):
        print(f"{self.name} is walking")

    @property
    def discount(self):
        return self.__age * 0.1


    def print_info(self):
        print(f"Name: {self.name}, Age: {self.__age}")

    def make_sound(self):
        print("Woof")



class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_info(self):
        print(Dog.counter)
        print(f"Name: {self.name}, Age: {self.age}")

    def make_sound(self):
        print("Meow")






