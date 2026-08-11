let result = "";
for(let i = 0;i < 50;i++){
  if(i%5===0){
    result += "<b>" + i + "</b>" + ",";
  }
  else{
    result += i + ",";
  }
}

document.getElementById("result").innerHTML = result;

