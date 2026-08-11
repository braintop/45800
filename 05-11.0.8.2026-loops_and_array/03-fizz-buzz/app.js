let n = +prompt("Enter a number");
let mult = 1;
for(let i=1;i<=30;i++){
  if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
  }
  else if(i%3===0){
    console.log("Fizz");
  }
  else if(i%5===0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}


let sum = 0 ;
let num=0;
for(let i=1;i<=10;i++){
  num = +prompt("Enter a number");
  if(num > 20){
    sum += num;
  }
}
console.log(sum);
