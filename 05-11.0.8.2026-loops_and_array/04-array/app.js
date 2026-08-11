let arr1 = ["a", "b", "c"];
let arr2 = ["d", "e", "f"];

let combined = arr1.concat(arr2);
console.log(combined);
// ["a", "b", "c", "d", "e", "f"]

console.log(arr1);  // ["a", "b", "c"] (unchanged)




arr1.push(arr1());
// ["a", "b", "c", ["d", "e", "f"]] 
