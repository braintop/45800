function f(errorCallback){ 
    try{
        setTimeout(() => {
            //===========================================
            let arr = [1, 2, 3, 4, 5];
            let index = Math.floor(Math.random()*100);
            if(index<5){
                console.log(arr[index]);
                console.log("f");
            }
            else{
                //throw new Error("Index is greater than 5");
                errorCallback("Index is greater than 5");
            }
            //===========================================


            }, 3000);

    } catch (error) {
        console.log(error);
    }
    finally{
        console.log("finally");
    }

}

function g(){
    console.log("g");
}

function h(){
    console.log("h");
}
function hanlePoliceError(err){
    console.log(err);
}

function hanleDoctorError(err){
    console.log(err);
}


f(hanlePoliceError);//f function is called after 3 seconds
g();
h();

f(hanleDoctorError);



