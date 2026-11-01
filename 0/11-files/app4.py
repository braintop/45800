with open("image1.png", "rb") as f:
    data = f.read()
    print(data)
    with open("image2.png", "wb") as f:
        f.write(data)

