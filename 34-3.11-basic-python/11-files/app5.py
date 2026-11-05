import pickle

data = {"name": "Alice", "age": 30}

with open("data.pkl", "wb") as f:
    pickle.dump(data, f)

with open("data.pkl", "rb") as f:
    data = pickle.load(f)
    print(data)






