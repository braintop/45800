class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.__age = age # private attribute
        self.__grade = grade

    @property
    def age(self):
        return self.__age

    @property
    def grade(self):
        return self.__grade


    @age.setter
    def age(self, age):
        if age > 0:
            self.__age = age
        else:
            print("Age must be positive")

    @grade.setter
    def grade(self, grade):
        if grade >= 0 and grade <= 100:
            self.__grade = grade
        else:
            print("Grade must be between 0 and 100")

s = Student("John", 20, 85)
print(s.age)
s.age = -10 # property set method. its set method.
print(s.age)# property access method. its get method.

a.grade = 110 # property set method. its set method.