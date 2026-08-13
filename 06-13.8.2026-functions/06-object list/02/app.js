let book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  pages: 180
}

for(let key in book) {//key is the key of the book object§
  console.log(key, book[key]);
}

for(let [key, value] of Object.entries(book)) {
  console.log(key, value);
}


let keys = Object.keys(book);
console.log(keys);//[ 'title', 'author', 'pages' ]

let values = Object.values(book);
console.log(values);//[ 'The Great Gatsby', 'F. Scott Fitzgerald', 180 ]

for(let key in keys) {
  console.log(key);
}

for(let key in book) {//key is the key of the book object§
  if(typeof book[key] === 'string') {
    console.log(key, book[key] );
  }
}

function printStudent(student) {
  console.log("hi: " + student.name + " - " + student.grade );
}
let s1 = { name: 'John', grade: 'A' };
printStudent(s1);
let s2 = { name: 'Jane', grade: 'B' };
printStudent(s2);


function printStudent(o) {
  let keys = Object.keys(o);
  return keys.length;
}

let result = printStudent(s1);
console.log(result);//2

//[]//array or list 
//{} // object or dictionary or json 

function isExisitKey1(o, key) {
  if(key in o) {
    return true;
  }
  return false;
}
console.log(isExisitKey1(s1, 'name'));//true
console.log(isExisitKey1(s1, 'bla'));//true

function isExisitKey1(o, key) {
  return key in o;
}
