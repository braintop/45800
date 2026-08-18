function makeRed() {
    document.getElementById('title').classList.add('red');
    document.querySelector('.title').classList.add('red');
    document.querySelector('#title').classList.add('red');

}

function removeRed() {
    document.getElementById('title').classList.remove('red');
    // document.querySelector('.title').classList.remove('red');
    // document.querySelector('#title').classList.remove('red');
}

function toggleRed() {
    document.getElementById('title').classList.toggle('red');
    // document.querySelector('.title').classList.toggle('red');
    // document.querySelector('#title').classList.toggle('red');
}


