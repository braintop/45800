function getData(url){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.floor(Math.random()*100);
            if(number%2===0){
                resolve("data from "+url);
            }
            else{
                reject("error from "+url);
            }
        }, 1000);
    });
}

getData("person.com").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
async function playData(){
    try{
        let data = await getData("person.com");
        console.log(data);
        let data2 = await getData("product.com");
        console.log(data2);
        let data3 = await getData("bonus.com");
        console.log(data3);
        let data4 = await getData("total.com");
        console.log(data4);
    }catch(err){
        console.log(err);
    }
}

playData();




