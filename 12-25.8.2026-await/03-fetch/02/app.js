async function getUsers() {
    let response= await fetch('https://jsonplaceholder.typicode.com/users')
    let data= await response.json()
    for(let i=0;i<data.length;i++){
        let user= data[i]
        let userDiv= document.createElement('div')
        userDiv.innerHTML= `
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        `
        userDiv.style.border='1px solid black'
        document.getElementById('users').appendChild(userDiv)
    }
    for(let i=0;i<data.length;i++){
        let user= data[i]
        let userRow= document.createElement('tr')
        userRow.innerHTML= `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        `
        document.getElementById('tableBody').appendChild(userRow)
    }
}

getUsers();