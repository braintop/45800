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

getData("person.com").then(data => {
    console.log(data);
    getData("product.com").then(data => {
        console.log(data);
        getData("bonus.com").then(data => {
            console.log(data);
            getData("total.com").then(data => {
                console.log(data);
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});

