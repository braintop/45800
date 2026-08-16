let count = 0;
let btn = document.querySelector("#counter-btn");
btn.addEventListener("click", () => {
    if(count < 10){
        count++;
        btn.textContent = `Clicks: ${count}`;
    }
    else if(count === 10){
    
        btn.removeEventListener("click", () => {
            alert("You have clicked the button 10 times!");
        });
    }
});

// function incrementCounter(){
//     const btn = document.querySelector("#counter-btn");

//     count++;
//     btn.textContent = `Clicks: ${count}`;
// }