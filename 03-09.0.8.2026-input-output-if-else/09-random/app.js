let num = Math.floor(Math.random()*100);
console.log(num);

if(num > 55){
    console.log("number is greater than 50");
    document.getElementById("output").innerText = "number is greater than 50";
}else if(num < 55){
    console.log("number is less than 50");
    document.getElementById("output").innerText = "number is less than 50";
}
else{
    console.log("number is equal to 50");
    document.getElementById("output").innerText = "number is equal to 50";
}