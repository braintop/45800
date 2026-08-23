function generate7BoomAfterDelayAsync(min, max){


    let p = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        let number = Math.floor(Math.random()*(max-min+1))+min;
        if(number%10===7|| number%7===0){
            resolve(number +": 7 boom");
        }
        else{
            reject(number +": not boom 7");
        }
    }, 1000);
    });

    return p;
}

// generate7BoomAfterDelayAsync(1, 100).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// });


function play7Boom(){
    let min = +document.getElementById("min").value;
    let max = +document.getElementById("max").value;
    generate7BoomAfterDelayAsync(min, max).then(data=>{
        document.getElementById("result").innerHTML = data;
    }).catch(err=>{
        document.getElementById("result").innerHTML = err;
    });
}

