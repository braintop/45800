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

    @property
    def discount(self):
        return self.__age * 0.1


    def print_info(self):
        print(f"Name: {self.name}, Age: {self.__age}")



class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def print_info(self):
        print(Dog.counter)
        print(f"Name: {self.name}, Age: {self.age}")


#propery 
p1 = Dog("Rex", 10)
p2 = Dog("Rex1", 10)
p3 = Dog("Rex2", 10)
p4 = Dog("Rex3", 10)
p5 = Dog("Rex4", 10)
p6 = Dog("Rex5", 10)
p7 = Dog("Rex6", 10)
p8 = Dog("Rex7", 10)
p9 = Dog("Rex8", 10)
p10 = Dog("Rex9", 10)
print(Dog.counter)
# x = p1.discount
# print(x)

p1.age = -15

print(p1.age)
p1.age = 20




