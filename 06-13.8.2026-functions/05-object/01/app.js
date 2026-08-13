let student = {
    name: 'John',
    age: 20,
    city: 'New York'
}

console.log(student);
student.grade = 'A';
student.country = 'USA';    

console.log(student);//{ name: 'John', age: 20, city: 'New York', country: 'USA' }
student.age = 40;
console.log(student);//{ name: 'John', age: 40, city: 'New York', country: 'USA' }
student.age = 80; 
console.log(student);//{ name: 'John', age: 80, city: 'New York', country: 'USA' }


delete student.age;
console.log(student);//{ name: 'John', city: 'New York', country: 'USA' }

const user = { name: "Alice", age: 25, role: "admin" };

// for...in loop
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

let keys = Object.keys(user);
console.log(keys);//[ 'name', 'age', 'role' ]

let values = Object.values(user);
console.log(values);//[ 'Alice', 25, 'admin' ]

let entries = Object.entries(user);
console.log(entries);//[ [ 'name', 'Alice' ], [ 'age', 25 ], [ 'role', 'admin' ] ]

let x, y =[100, 9];//x = 100, y = 9 destrucure 
let x,t,c,b = [100, 9, 8, 7];//x = 100, t = 9, c = 8, b = 7 destrucure 

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}