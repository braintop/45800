class Book:
    library_name = "Oren malka"
    counter = 0
    def __init__(self, title, pages):
        self.title = title
        self.__pages = pages
        Book.counter += 1

    @property
    def pages(self):
        return self.__pages

    @pages.setter
    def pages(self, value):
        if value > 0:
            self.__pages = value
        else:
            print("Pages must be positive")

    def print_info(self):
        print(f"Title: {self.title}, Pages: {self.pages}")
    
    @property
    def reading_time(self):
        return self.__pages * 2

    def read(self):
        print(f"{self.title} is being read")

    @staticmethod
    def get_price():
        return 50* Book.counter

class Magazine:
    
    def __init__(self, title, pages):
        self.title = title
        self.__pages = pages

    @property
    def pages(self):
        return self.__pages

    @pages.setter
    def pages(self, value):
        if value > 0:
            self.__pages = value
        else:
            print("Pages must be positive")
    
    def print_info(self):
        print(f"Title: {self.title}, Pages: {self.__pages}")

    def read(self):
        print(f"I am reading magazin {self.title}")
