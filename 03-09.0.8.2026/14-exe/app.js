function showName() {
    let name = document.getElementById("nameInput").value;
    let el = document.getElementById("result");
    el.innerHTML = name;
    el.style.backgroundColor = "red";
    el.style.color = "yellow";
    el.style.textAlign = "center";






    // document.getElementById("nameInput").value = name;
    // document.getElementById("result").innerHTML = name;
    // document.getElementById("result").style.backgroundColor = "red";
    // document.getElementById("result").style.color = "yellow";
    // document.getElementById("result").style.textAlign = "center";
  }