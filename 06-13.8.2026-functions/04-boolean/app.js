function isEvenV1(n){
    if(n%2===0){
        return true;
    }else{
        return false;
    }
}
function isEvenV2(n){
    return n%2===0;//true or false
}

let n = +prompt("Enter a number");
let answer1 = isEvenV1(n);
let answer2 = isEvenV2(n);
console.log(answer1);
console.log(answer2);


if(answer1){
    console.log("Even");
}else{
    console.log("Odd");
}

if(answer2){
    console.log("Even");
}else{
    console.log("Odd");
}


function devudeBy2And3V1(n){
    if(n%2===0 && n%3===0){
        return true;
    }else{
        return false;
    }
}
function devudeBy2And3V2(n){
    return n%2===0 && n%3===0;//true or false
}


let answer3 = devudeBy2And3(n);
console.log(answer3);

//מספק ראשוני מתחלק ב 1 ובעצמו 
function isPrimeV1(n){
    if(n<=1){
        return false;
    }
    for(let i=2;i<n/2;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

let new_numbers = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<new_numbers.length;i++){
    let answer = isPrimeV1(new_numbers[i]);
    if(answer){
        console.log(new_numbers[i] + " is prime");
    }else{
        console.log(new_numbers[i] + " is not prime");
    }
    console.log(answer);
}