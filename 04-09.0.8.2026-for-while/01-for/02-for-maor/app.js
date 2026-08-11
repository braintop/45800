function averageOfNNumbers() {
  let n =+document.getElementById("n").value;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let number = +prompt("Enter number " + i+1);
    sum += number;
    count++;// count = count + 1
  }
  let average = sum / count;
  alert("Average of numbers is: " + average);
  document.getElementById("result").innerHTML = "Average of numbers is: " + average;
}