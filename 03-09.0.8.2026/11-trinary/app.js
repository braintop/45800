let num = Math.floor(Math.random()*100);
if(num>50){
    console.log("number is greater than 50");
}else{
    console.log("number is less than 50");
}

let result = num>50 ? "number is greater than 50" : "number is less than 50";
//alert(result);
document.getElementById("output").innerText = result;