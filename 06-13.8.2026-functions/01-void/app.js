// function square(n){
//     let s = n * n;
//     console.log(s);
// }

// square(5);//5*5=25
// square(6);//6*6=36
// for(let i=0;i<10;i++){
//     square(i);//0*0=0, 1*1=1, 2*2=4, 3*3=9, 4*4=16, 5*5=25, 6*6=36, 7*7=49, 8*8=64, 9*9=81
// }


// function greet(name="Guest"){
//     console.log("Hello, " + name + "!");
// }
// let names = ["John", "Jane", "Jim", "Jill", "Jack", "Jill", "Jill"];
// let index = Math.floor(Math.random() * names.length);
// greet(names[index]);

// function max(a,b){
//     if(a>b){
//         console.log(a);
//     }else{
//         console.log(b);
//     }
// }

// let number1 = Math.floor(Math.random() * 100);
// let number2 = Math.floor(Math.random() * 100);
// max(number1,number2);

// function isEven(n){
//     if(n%2===0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }

// isEven(23);
// let n = +prompt("Enter a number");
// isEven(n);


// let n1 = Math.floor(Math.random() * 100);
// isEven(n1);

// function maxBetween2Numbers1(a,b, c){
//     if(a>b && a>c){
//         console.log(a);
//     }else if(b>a && b>c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }

// maxBetween2Numbers1(1,-4,9);//9

function maxBetween2Numbers1(a,b, c){
   let max = Math.max(a,b,c);
   console.log(max);
}

maxBetween2Numbers1(1,-4,9);//9



function printTillN(n){
    for(let i=1;i<=n;i++){
        console.log(i); 
    }
}

printTillN(10);//1, 2, 3, 4, 5, 6, 7, 8, 9, 10
printTillN(20);//1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

let x = 5 + Math.floor(Math.random() * 10);//5 to 15(not including 15) 
printTillN(x);