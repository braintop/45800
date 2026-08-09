//  initialize i=0, condition i<10, increment i++
for(let i=0;  i<10;   i++)
{
    console.log(i);
}
console.log("--------------------------------");
for(let i=10; i>0; i--)
{
    console.log(i);//10 9 8 7 6 5 4 3 2 1
}
console.log("--------------------------------");
for(let i=0; i<10; i+=2)// i+=2 i = i + 2
{
    console.log(i);
}//0 2 4 6 8
console.log("--------------------------------");
for(let i=10; i>0; i-=2)// i-=2 i = i - 2
{
    console.log(i);
}//10 8 6 4 2





// Sum of numbers 1 to 10
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;  // same as: sum = sum + i
}
console.log("Sum:", sum);  // Sum: 55
// i | sum | sum = sum + i 
// 1 | 0   | 0 + 1 = 1
// 2 | 1   | 1 + 2 = 3
// 3 | 3   | 3 + 3 = 6
// 4 | 6   | 6 + 4 = 10
// 5 | 10  | 10 + 5 = 15

console.log("--------------------------------");
function sumOfNumbers() {
  let sum = 0;
  
  for (let i = 1; i <= 3; i++) {
    //sum += +prompt("Enter price of item " + i);
    let price = +prompt("Enter price of item " + i);
    //sum += price;
    sum = sum + price;
  }
  alert(i);//3
  alert("Sum of prices is: " + sum);
}

sumOfNumbers();

function averageOfNumbers() {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < 3; i++) {
    let number = +prompt("Enter number " + i);
    sum += number;
    count++;// count = count + 1
  }

  let average = sum / i;
  alert("Average of numbers is: " + average);
}

function averageOfNNumbers() {
  let n = +prompt("Enter number of numbers");
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let number = +prompt("Enter number " + i);
    sum += number;
    count++;// count = count + 1
  }

  let average = sum / i;
  alert("Average of numbers is: " + average);
}


averageOfNumbers();