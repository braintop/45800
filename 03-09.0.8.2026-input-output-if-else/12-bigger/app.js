
function bigi(){
    let num1 = +prompt("Enter first number");
    let num2 = +prompt("Enter second number");
    
    if(num1 > num2){
        alert("num1 is bigger");
    }else if(num2 > num1){
        alert("num2 is bigger");
    }else{
        alert("num1 and num2 are equal");
    }
    document.getElementById("output").innerText = result;
    
    // let result = num1 >= num2 ? num1 : num2;
    // alert(result);
}

//? אם כן 
// : אחרת 