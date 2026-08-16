function addFriend(){
    let friendName = document.getElementById('friendName').value;
    let ul = document.getElementById('friends');//<ul id="friends">
    let li = document.createElement('li');//<li></li>
    li.innerText = friendName;  //<li>friendName</li>
    ul.appendChild(li); //<ul id="friends"><li>friendName</li></ul>
    document.getElementById('friendName').value = ''; //clear the input field
    //console.log(friendName);


    // let friends = document.getElementById('friends');
    // let li = document.createElement('li');
    // li.innerText = friendName;
    // friends.appendChild(li);
}