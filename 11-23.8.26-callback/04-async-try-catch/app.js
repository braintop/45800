function f(){ 
    try{
        let arr = [1, 2, 3, 4, 5];
        let index = Math.floor(Math.random()*100);
        console.log(arr[index] );
        console.log("f");

        if(index > 5){
            throw new Error("Index is greater than 5");
        }
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

f();
g();
h();

//f
//g
//h 

//sync code

