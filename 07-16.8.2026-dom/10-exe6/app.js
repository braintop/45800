function hideTitle(){
    document.getElementById('hello').classList.add("hide");
}
function showTitle(){
    document.getElementById('hello').classList.remove("hide");
}


function toggleTitle(){
    let btnToggle = document.getElementById('btnToggle');
    let el = document.getElementById('hello');
    if (el.classList.contains("hide")) {
        btnToggle.innerText = "hide"
    } else {
        btnToggle.innerText = "show"
    }
    document.getElementById('hello').classList.toggle("hide");
}
