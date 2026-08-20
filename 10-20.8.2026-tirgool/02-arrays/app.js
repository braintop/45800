let numbers = [1,2,3,4,5,6,7,8,9,10];


// let arr = [] 
// for(let i=0;i<numbers.length;i++){
    
//     arr.push(numbers[i] * 2);
// }
// console.log(arr);


function doubleArray(arr){
    let arr = numbers.map(number => number * 2);
    return arr;
}

let newNumbers = doubleArray(numbers);