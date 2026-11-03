class Vehicle:
    def __init__(self, speed):
        self.speed = speed

    def move(self):
        print(f"Moving at {self.speed} km/h")

class Car(Vehicle):
    def __init__(self, speed, fuel):
        super().__init__(speed)
        self.fuel = fuel

    def refuel(self, amount):
        self.fuel += amount
        print(f"Refueled {amount} liters. Total fuel: {self.fuel} liters")


v1 = Vehicle(100)
v1.move()

c1 = Car(100, 200)
c1.move()
print(c1.fuel)
c1.refuel(10)
print(c1.fuel)
c1.move()