try:
    f = open("file1.txt", "r")
    content= f.read()
    print(content)
    f.close()
except FileNotFoundError as e:
    print(e)
except Exception as e:
    print(e)
finally:
    print("Program continues")




