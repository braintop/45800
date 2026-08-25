function isPrime(number){
    if(number<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}
function generatePrimeNumberAfterDelayAsync(min, max){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = min + Math.floor(Math.random()*(max-min+1));
            if(isPrime(number)){
                resolve(number +": is prime");
            }
            else{
                reject(number +": is not prime");
            }
        }, 1000);
    });
    return p;
}
function playPrimeNumber(){
    let min = +document.getElementById("min").value;
    let max = +document.getElementById("max").value;
    generatePrimeNumberAfterDelayAsync(min, max).then(data=>{
        document.getElementById("result").innerHTML = data;
    }).catch(err=>{
        document.getElementById("result").innerHTML = err;
    });
}