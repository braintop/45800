function hello(callback) {
    console.log("Hello");
    callback();
}

function bye() {
    console.log("Bye");
}

hello(bye);//bye function is called after hello function is called



function jump() {
    console.log("Jump");
}

function run() {
    console.log("Run");
}

function walk() {
    console.log("Walk");
}

bye(jump);
bye(run);
bye(walk);



let numbers = [1, 2, 3, 4, 5];


let f = function(number) {
    return number > 3;
}
numbers.find(f);

console.log(number);