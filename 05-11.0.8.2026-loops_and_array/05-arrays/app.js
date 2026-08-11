let arr =[]; 
for(let i=0;i<5;i++){
    let num = Math.floor(Math.random()*100);
    arr.push(num);
}
console.log(arr);
console.log(arr[arr.length-1]); // last element
console.log(arr[0]); // first element
console.log(arr[1000]); // undefined

console.log(arr[0])
console.log(arr[arr.length-1]);

let arr1=[];
for(let i=0;i<5;i++){
    let num = Math.floor(Math.random()*100);
    arr1.push(num);
}
console.log(arr1);

let numbers = arr1.concat(arr);
console.log(numbers);




let numbers =[];
let s = 0; 
for(let i=0;i<numbers.length;i++){
    let num = Math.floor(Math.random()*100);
    s += num;
    numbers.push(num);
}
console.log(s);

let max = numbers[0];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>max){
        max = numbers[i];
    }
}
console.log(max);
//10, 5, 4, 20 ,12 
// max = 10
// i = 0   numbers[0] = 10 > max = 10
// i = 1   numbers[1] = 5 > max = 10
// i = 2   numbers[2] = 4 < max = 10
// i = 3   numbers[3] = 20 > max = 20
// i = 4   numbers[4] = 12 < max = 20


for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2 === 1){
        console.log(numbers[i]);
    }
}



let nums = [];
for(let i=0;i<12;i++){
    let num = Math.floor(Math.random()*100);
    nums.push(num);
}
for(let i=0;i<nums.length;i++){
    if(nums[i]%2 === 1){
        console.log(nums[i]);
    }
}

let max = nums[0];
for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
        max = nums[i];
    }
}
console.log(max);

let names = ["John", "Jane", "Jim", "Jill", "Jack"];
let index = Math.floor(Math.random()*names.length);//0, 1, 2, 3, 4
console.log(names[index]);

for(let i=0;i<names.length;i++){
    if(names[i].length > 3){
        console.log(names[i]);
    }
}
let c = 0; 
for(let i=0;i<names.length;i++){
    if(names[i][0] ==="N"){
        c++;
        console.log(names[i]);
    }
}
console.log(c);
let count = 0;
for(let i=0;i<names.length;i++){
    let name = names[i];
    if(name[0]==="N"){
        count++;
    }
}   
console.log(count);


