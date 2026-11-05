#from animals import Dog, Cat
from library_items import Book, Magazine

b1 = Book("The Great Gatsby", 180)
b2 = Book("1984", 328)
m1 = Magazine("Time", 30)
m2 = Magazine("National Geographic", 40)

print(Book.library_name)
print(Book.counter)
print(Book.get_price())


print(b1.pages)
b1.pages = 200 
print(b1.pages)
b1.pages = -10 
print(b1.pages) 
print(b1.reading_time)

items = [b1, b2, m1, m2]
for item in items:
    item.print_info()
    print(item.pages)
    if item.pages > 150:
        print("This is a long book")
    else:
        print("This is a short book")
    if item.title == "Magazine 1":
        print("Title: Science Today, Pages: 60")
