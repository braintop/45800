def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Division by zero") # זורק שגיאה של חילוק באפס throw exception
    return a / b



try:
    print(divide(10, 0))
except ZeroDivisionError as e:
    print(e)
except ValueError as e:
    print(e)
except Exception as e:
    print(e)
finally:
    print("Program continues")

print("Program continues")


def withdraw(amount):
    if amount < 0:
        raise ValueError("Amount must be positive")
    return amount


try:
    print(withdraw(100))
except ValueError as e:
    print(e)
except Exception as e:
    print(e)
finally:
    print("Program continues")

print("Program continues")


def  calculate_average(numbers)
    if len(numbers) == 0:
        raise ValueError("List is empty")
    if type(numbers) != list:
        raise TypeError("List is not a list")

    return sum(numbers) / len(numbers)


try:
    print(calculate_average("[1, 2, 3, 4, 5"]))
except ValueError as e:
    print(e)
except Exception as e:
    print(e)
finally:
    print("Program continues") 

try:
    print(calculate_average([]))
except ValueError as e:
    print(e)
except TypeError as e:
    print(e)
except Exception as e:
    print(e)
finally:
    print("Program continues") 

print("Program continues")



def get_element(index, list):
    if index < 0 or index >= len(list):
        raise IndexError("Index out of range")
    if len(list) == 0:
        raise ValueError("List is empty")
    if type(list) != list:
        raise TypeError("List is not a list")
    return list[index]


try:
    print(get_element(1, [1, 2, 3, 4, 5]))
except IndexError as e:
    print(e)
except Exception as e:
    print(e)
finally:
    print("Program continues") 


try:
    print(get_element(1, []))
except ValueError as e:
    print(e)
except Exception as e:
    print(e)
finally:
    print("Program continues") 

print("Program continues")

