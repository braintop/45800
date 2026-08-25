 //(f,g)=>{}
 function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //===========================================
            let arr = [1, 2, 3, 4, 5];
            let index = Math.floor(Math.random()*10);
            if(index<5){
                console.log(arr[index]);
                console.log("f");
                resolve(arr[index]);
            }
            else{
                //throw new Error("Index is greater than 5");
                reject("error: Index is greater than 5");
            }
            //===========================================

            }, 3000);
    });

    return promise;
}

let s= (data)=>{
    console.log(data);
}
let e= (err)=>{
    console.log(err);
}
let p=f();
p.then(successCallback).catch(errorCallback);
console.log("code continues");