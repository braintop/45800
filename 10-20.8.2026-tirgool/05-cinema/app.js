function addMovie(event) {
    let movies = localStorage.getItem('movies')|| "[]";
    movies = JSON.parse(movies);
    event.preventDefault();
    const movie = {
        movie: document.getElementById('movie').value,
        genre: document.getElementById('genre').value,
        director: document.getElementById('director').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        price: document.getElementById('price').value,
    }
    movies.push(movie);
    console.log(movies);
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = "";
    let keys = Object.keys(movie);

    for(let movie of movies){
        let tr = document.createElement('tr');
        keys.forEach(key => {
            let td = document.createElement('td');
            td.textContent = movie[key];
            tr.appendChild(td);
        });

        let td = document.createElement('td');
        let btnDelete = document.createElement('button');
        btnDelete.onclick=function(){
          //  movies.splice(movies.indexOf(movie),1);
          //  renderMovies();
        }
        btnDelete.textContent="Delete";
        td.appendChild(btnDelete);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }


    localStorage.setItem('movies', JSON.stringify(movies));
    reserForm();
}

function renderMovies() {
    let movies = localStorage.getItem('movies')|| "[]";
    movies=JSON.parse(movies);
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = "";
    let keys = Object.keys(movies[0]);

    for(let movie of movies){
        let tr = document.createElement('tr');
        keys.forEach(key => {
            let td = document.createElement('td');
            td.textContent = movie[key];
            if(key === "movie"){
                td.style.color = "green";
            }
            if(key === "genre"){
                td.style.color = "blue";
            }
            if(key === "director"){
                td.style.color = "red";
            }
            tr.appendChild(td);
        });
        let td = document.createElement('td');
        let btnDelete = document.createElement('button');
        btnDelete.onclick=function(){
           let index = movies.indexOf(movie);
           movies.splice(index,1);
           localStorage.setItem('movies', JSON.stringify(movies));
           renderMovies();
        }
        btnDelete.textContent="Delete";
        td.appendChild(btnDelete);
        tr.appendChild(td);
        tbody.appendChild(tr);



    }


}
function reserForm(){
    document.getElementById('movie').value = "";
    document.getElementById('genre').value = "";
    document.getElementById('director').value = "";
    document.getElementById('date').value = "";
    document.getElementById('time').value = "";
    document.getElementById('price').value = "";
}
renderMovies();