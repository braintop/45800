function f(successCallback, errorCallback){ 
        setTimeout(() => {
            //===========================================
            let arr = [1, 2, 3, 4, 5];
            let index = Math.floor(Math.random()*100);
            if(index<5){
                console.log(arr[index]);
                console.log("f");
                successCallback(arr[index]);
            }
            else{
                //throw new Error("Index is greater than 5");
                errorCallback("Index is greater than 5");
            }
            //===========================================


            }, 3000);


}

function g(){
    console.log("g");
}

function h(){
    console.log("h");
}
function handlePoliceError(err){
    console.log(err);
}
function handleSuccess(data){
    console.log(data);
}
function handleDoctorError(err){
    console.log(err);
}


f(hanleSuccess, hanlePoliceError);//f function is called after 3 seconds
g();
h();




