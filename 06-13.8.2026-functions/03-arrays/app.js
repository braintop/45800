function printArray(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

let myfriends = ["John", "Jane", "Jim", "Jill", "Jack"];

let yourFriends = ["John", "Jane", "Jim", "Jill", "Jack"];
printArray(yourFriends);//John, Jane, Jim, Jill, Jack

printArray(myfriends);//John, Jane, Jim, Jill, Jack

let numbers = [1,2,3,4,5,6,7,8,9,10];
printArray(numbers);//1, 2, 3, 4, 5, 6, 7, 8, 9, 10

function changeFirstNumberByValue(n){
    n = 100;
    
}
let x = 10;
changeFirstNumberByValue(x);
console.log(x);//10
function changeFirstNumber(arr){
    arr[0] = 100;
    arr[arr.length-1] = 200;
}

changeFirstNumber(numbers);
console.log(numbers);//100, 2, 3, 4, 5, 6, 7, 8, 9, 200
//numbers[0] = 100
//numbers[9] = 200


function sumOfNumbers(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

let sum = sumOfNumbers(numbers);//100+2+3+4+5+6+7+8+9+200 = 335
console.log(sum);//100+2+3+4+5+6+7+8+9+200 = 335

function averageOfNumbers(arr){
    let sum = sumOfNumbers(arr);
    return sum / arr.length;
}

let average = averageOfNumbers(numbers);//335/10 = 33.5
console.log(average);//33.5


function averageOfNumbers2(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

let average2 = averageOfNumbers2(numbers);//335/10 = 33.5
console.log(average2);//33.5

function maxNumberInArray(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

let max = maxNumberInArray(numbers);//200
console.log(max);//200

let ourNames = ["Johnik", "Janeickjjabc", "Jim1", "Jill2", "Jack"];

function maxLengthNameInArray(names){
    let max = names[0];
    for(let i=0;i<names.length;i++){
        if(names[i].length>max.length){
            max = names[i];
        }
    }
    return max;
}
let maxLengthName = maxLengthNameInArray(ourNames);//Janeickjjabc
console.log(maxLengthName);//Janeickjjabc