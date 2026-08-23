console.log("start");
let count = 0;
let timer = setInterval(() => {
    if(count === 5){
        clearInterval(timer);
    }
    count++;
    console.log("count: " + count);
}, 1000);
console.log("end");

//start
//end
//after 2 seconds

//async code

