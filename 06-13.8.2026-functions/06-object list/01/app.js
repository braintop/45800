let students = [
  {
    name: 'John',
    age: 20,
    city: 'New York'
  },
  {
    name: 'Jane',
    age: 21,
    city: 'Los Angeles',
  },
  {
    name: 'Jim',
    age: 22,
  }
]
console.log(students);
console.log(students[0]);
console.log(students[0].name);
console.log(students[0].age);
console.log(students[0].city);
let numbers = [1, 2, 3, 4, 5];
for(let number of numbers) {
  console.log(number);
}
for(let student of students) {
  console.log(student);
  console.log(student.name);
  console.log(student.age);
  console.log(student.city);
}

for(let i = 0; i < students.length; i++) {  //for loop
  console.log(students[i]);
  console.log(students[i].name);
  console.log(students[i].age);
  console.log(students[i].city);
}

let products = [
  {
    name: 'Product 1',
    price: 100,
    quantity: 10,
    instock: true
  },
  {
    name: 'Product 2',
    price: 200,
    quantity: 20,
    instock: true
  },
  {
    name: 'Product 3',
    price: 300,
    quantity: 30,
    instock: false
  }
]
for(let product of products) {
  console.log(product);
  console.log(product.name);
  console.log(product.price);
  console.log(product.quantity);
  console.log(product.instock);
}

for(let i = 0; i < products.length; i++) {
if(products[i].instock) {
  console.log(products[i].name);
  sum+=products[i].price;
  }
}
console.log(sum);
let average = sum / products.length;
console.log(average);

let max = products[0]
for(let i = 0; i < products.length; i++) {
  if(products[i].price > max.price) {
    max = products[i];
  }
}
console.log(max.price);
console.log(max.name);
console.log(max.quantity);
console.log(max.instock);

