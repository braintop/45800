let arr = [1,2,3,4,5];

// let copyArr = [];
// for(let i=0;i<arr.length;i++){
//     copyArr.push(arr[i]);
// }
// console.log(copyArr);

let copyArr2 = [...arr];//[1,2,3,4,5]

// let copyArr3 = arr; 
// copyArr3.push(6);
// console.log(copyArr3);//[1,2,3,4,5,6]
// console.log(arr);//[1,2,3,4,5,6]




let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = [...arr1, ...arr2];
console.log(arr3);//[1,2,3,4,5,6,7,8,9,10]
