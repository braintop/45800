function compute(a, b, callback) {
    let x =callback(a, b);
    //save to db 
    //send email
    //send sms
    console.log(x);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

compute(10, 5, add);
compute(10, 5, subtract);
compute(10, 5, multiply);
compute(10, 5, divide);

