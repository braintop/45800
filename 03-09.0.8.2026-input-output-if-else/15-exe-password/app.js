function checkPassword() {
    let pass = "123456";
    let password = prompt("Enter your password");
    if(pass === password){
      document.body.style.backgroundColor = "blue";
    }else{
      document.body.style.backgroundColor = "red";
    }
}

function checkEvenOrOdd() {
  let number = Math.floor(Math.random() * 10);
  if(number % 2 === 0){
    document.body.style.backgroundColor = "green";
  }else{
    document.body.style.backgroundColor = "red";
  }
}