class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.__age = age # private attribute
        self.grade = grade

    @property
    def age(self):
        return self.__age


    @age.setter
    def age(self, age):
        if age > 0:
            self.__age = age
        else:
            print("Age must be positive")

s = Student("John", 20, 85)
print(s.age)
s.age = -10 # property set method. its set method.
print(s.age)# property access method. its get method.