with open("file1.txt", "r") as f:
    for line in f:
        print(line.strip())


with open("file1.txt", "r") as f:
    lines = f.readlines()
    print(lines)

