#from animals import Dog, Cat
from animals import *
d1 = Dog("Rex1", 10)
d2 = Dog("Rex2", 20)

c1 = Cat("Whiskers", 5)
c2 = Cat("Whiskers2", 10)

animals = [d1, d2, c1, c2]
for animal in animals:
    if animal.age > 15:
        print("Old dog")
        animal.make_sound()
    else:
        print("Young dog")
    animal.walk()
