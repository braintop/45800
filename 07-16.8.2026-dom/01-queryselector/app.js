function changeNameColor(){
     let element = document.querySelector(".name");
    // document.getelementById("name").style.backgroundColor = 'red';
    element.style.color = 'pink';
}

function changeAllPColor(){
    let query = document.querySelectorAll("p");
    console.log(query);
    for(let i = 0; i < query.length; i++){
        query[i].style.color = 'yellow';
    }
}

function changeClassLoveToRed(){
    let query = document.querySelector(".love");
    query.style.color = 'red';
}



function changeMyColor(event){
    
    let element = event.target;
    console.log(element);
    element.style.color = 'blue';
}
function changeAllPColorToGreen(){
    let elements = document.querySelectorAll("p");
    console.log(elements);
    for(let i = 0; i < elements.length; i++){
        elements[i].style.color = 'green';
    }

}


function changeAllBackgroundToLightBlue(){
    let elements = document.querySelectorAll("p");
    for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = 'lightblue';
    }
}


function chanheAllParagraphsToFontSize30(){
    let elements = document.querySelectorAll("p");
    for(let i = 0; i < elements.length; i++){
        elements[i].style.fontSize = '30px';
    }
}