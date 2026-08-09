function selectColor() {
    let color = prompt("Enter a color (red/green/blue)");

    switch (color) {
        case "red":
            document.body.style.backgroundColor = "red";
            break;
        case "green":
            document.body.style.backgroundColor = "green";
            break;
        case "blue":
            document.body.style.backgroundColor = "blue";
            break;
        default:
            alert("Unknown color!");
    }
}
function bigi() {
    let num1 = +prompt("Enter first number");
    let num2 = +prompt("Enter second number");
    let num3 = +prompt("Enter third number");
    if (num1 > num2 && num1 > num3) {
        alert("num1 is the biggest");
    } else if (num2 > num1 && num2 > num3) {
        alert("num2 is the biggest");
    } else {
        alert("num3 is the biggest");
    }
}

//? אם כן 
// : אחרת 