function read2Numbers(){
    let num1 = +prompt("Enter the first number");
    let num2 = +prompt("Enter the second number");
    if(num1 >= num2){
        alert(num1)
    }else{
        alert(num2)
    }
}
//read2Numbers();

function readAge(){
    let age = +prompt("Enter your age");
    if(age >= 17){
        alert("You are an adult");
    }else{
        alert("You are not an adult");
    }
}

//for 
for(let i=0;i<1000;i++){
    if(i%2 === 0){
        console.log(i);
    }
}

for(let i=1000;i>=0;i--){
    if(i%2 === 1){
        console.log(i);
    }
}


function displayRandom1(){
    let random = 1 + Math.floor(Math.random() * 999);
    for(let i=1;i<random;i++){
        if(i%3===0){
            console.log(i);
        }
    }
}

function displayBetweenNumbers(){
    let num1 = +prompt("Enter the first number");
    let num2 = +prompt("Enter the second number");
    if(num1 > num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for(let i=num1;i<=num2;i++){
        console.log(i);
    }
}


function sumOf100randomNumbers(){
    let sum = 0;
    for(let i=0;i<100;i++){
        let random = 1 + Math.floor(Math.random() * 999);
        sum += random;
    }
    console.log(sum);
}
function maxOf100randomNumbers(){
    let max = 1 + Math.floor(Math.random() * 999);
    for(let i=0;i<100;i++){
        let random = 1 + Math.floor(Math.random() * 999);
        if(random > max){
            max = random;
        }
    }
    console.log(max);
}
//n=3 
// * * *  
// * * *  
// * * *  

function printSquare(){
    let n = +prompt("Enter the number of rows");
    for(let i=0;i<n;i++){
        let linestars="";
        for(let j=0;j<n;j++){
            linestars += "*"+ i*j;
        }
        console.log(linestars); 
    }
}
//printSquare();

function neta()
{
    let n = +prompt("Enter the number of rows");
    let linestars="*".repeat(n);
    for(let i=0;i<n;i++){
        console.log(linestars);
    }
}



function tillreadNegetiveNumber1(){
    let number = +prompt("Enter a number");
    while(number >= 0){
        console.log(number) 
        number = +prompt("Enter a number");
    }
}
function tillreadNegetiveNumbe2(){
    while(true){
        let number = +prompt("Enter a number");
        if(number < 0){
            break;
        }
        console.log(number);
    }
}

tillreadNegetiveNumber();

function tillreadNumberTillMode7Is0(){
    while(true){
        let number = +prompt("Enter a number");
        if(number %7 === 0){
            break;
        }
        if(number < 0){
            console.log(number+":You entered a negative number");
        }
        else if(number>0){
            console.log(number +":You entered a positive number");
        }
        else{
            console.log(number+":You entered a zero");
        }
    }
}
