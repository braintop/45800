class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.__salary = salary
    
    @property
    def salary(self):
        return self.__salary

    @salary.setter
    def salary(self, value):
        if value > 0:
            self.__salary = value
        else:
            print("Salary must be positive")

    def print_info(self):
        print(f"Name: {self.name}, Salary: {self.salary}")


class Manager(Employee):
    def __init__(self, name, salary,department, bonus):
        super().__init__(name, salary)
        self.department = department
        self.bonus = bonus

    def print_info(self):
        print(f"Name: {self.name}, Salary: {self.salary}, Department: {self.department}, Bonus: {self.bonus}")

    def total_salary(self):
        return self.salary + self.bonus

m1 = Manager("John", 1000, "IT", 100)
e2 = Employee("Jane", 2000)
e3 = Employee("Jim", 3000)
m4=Manager("Jill", 4000, "HR", 200)
# e1.print_info()
# print(e1.bonus)
# print(e1.total_salary())


workers = [m1, e2, e3, m4]
for worker in workers:
    if isinstance(worker, Manager): # polymorphism (same interface, different implementations)
        print(worker.total_salary())

