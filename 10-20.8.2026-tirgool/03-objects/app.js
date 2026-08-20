let student = {
    name: "John",
    age: 20,
    grade: 70
}

console.log(student.name);
console.log(student.age);
console.log(student.grade);

student.city = "Tel Aviv";

student.grade = 90;
delete student.age;
console.log(student);


let keys = Object.keys(student);//["name", "age", "grade", "city"]
for(let key of keys){
    console.log(key);
}

let values = Object.values(student);//["John", 20, 90, "Tel Aviv"]
for(let value of values){
    console.log(value);
}

let entries = Object.entries(student);//[["name", "John"], ["age", 20], ["grade", 90], ["city", "Tel Aviv"]]
for(let entry of entries){
    console.log(entry);
}


let products = [
    {
        name: "Product 1",
        price: 100
    },
    {
        name: "Product 2",
        price: 200,
        instock: true   
    },
    {
        name: "Product 3",
        price: 300,
        instock: false
    }
]

for(let product of products){
    if(product.instock){
        console.log(product.name + " is in stock");
    }
}


products.forEach(product => {
    if(product.instock){
        console.log(product.name + " is in stock");
    }
});


let maxPrice = products[0]
for(let product of products){
    if(product.price > maxPrice.price){
        maxPrice = product;
    }
}
console.log(maxPrice);//{name: "Product 3", price: 300, instock: false}



let sum =0 ;
let average = 0;
for(let product of products){
    sum += product.price;
}
average = sum / products.length;
console.log(average);//200
