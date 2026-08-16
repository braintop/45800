function square(n){
    return n * n;
}

let s1 = square(5);//25
let s2 = square(36);//1296

console.log(s1,s2);

function greet(name){
    return "Hello, " + name + "!";
}

let g1 = greet("John");//Hello, John!
let g2 = greet("Jane");//Hello, Jane!

console.log(g1);
console.log(g2);

function max(a, b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

let m1 = max(10,20);//20
let m2 = max(20,10);//20
console.log(m1);
console.log(m2);


function sunTillN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}

let n1 = +prompt("Enter a number");//10 
let s = sunTillN(n1);// 1+2+3+4+5+6+7+8+9+10 = 55
console.log(s);

function printTill1(n){
    n = 1000;
    for(let i=n;i>=1;i--){
        console.log(i);
    }
}

let n = +prompt("Enter a number");//10 
printTill1(n);// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10