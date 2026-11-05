from abc import ABC, abstractmethod
class Animal(ABC):
    def __init__(self, name):
        self.name = name
    
    @abstractmethod
    def max_speed(self):
        pass

    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def __init__(self, name, legs):
        super().__init__(name)
        self.legs = legs

    def make_sound(self):
        return f"{self.name} says woof with {self.legs} legs"

    def max_speed(self):
        return 10



       
#a1 = Animal("Animal 1")

d1 = Dog("Dog 1", 4)
print(d1.make_sound())