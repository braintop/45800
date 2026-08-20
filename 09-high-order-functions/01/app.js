//()=>{}
//function(){}    


let numbers = [1, 2, 3, 4, 5,59, 80, 1];

// let squers = [] 
// for (let i = 0; i < numbers.length; i++) {
//     squers.push(numbers[i] * numbers[i]);
// }
// console.log(squers);//[1, 4, 9, 16, 25]

let squers1 = numbers.map(number=> number * number );
let squers2 = numbers.map(number=>{
    return number * number;
});

console.log(squers1);//[1, 4, 9, 16, 25]
console.log(squers2);//[1, 4, 9, 16, 25]


let numbers1 = numbers.find(number=> number > 3);
console.log(numbers1);//4

let numbers2 = numbers.findIndex(number=> number > 3);
console.log(numbers2);//3

let numbers3 = numbers.filter(number=> number > 3);
console.log(numbers3);//[4, 5, 59, 80]


numbers.forEach(number=>{
    console.log(number*number + number);//1, 6, 10, 17, 26, 26, 6400, 2
});



let numbers4 = numbers.map(number=> number*number).filter(number=> number > 3).forEach(number=>{
    console.log(number);
});


let numbers5 = numbers.every(number=> number > 3);//false 
let numbers6 = numbers.some(number=> number > 3);//true     



