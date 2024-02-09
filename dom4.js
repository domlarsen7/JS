const $ = selector => document.querySelector(selector);
var number = document.getElementById("stepThree").innerHTML;
console.log(number);


for (let i = 0; i < 5; i++) {
  number += "The number is " + i + "<br>";
  document.getElementById("stepThree").innerHTML = number.toString();
}

const changeColor = () => {
  document.body.style.backgroundColor = "red";
  document.getElementById("stepThree").style.backgroundColor = "yellow";
}


document.addEventListener("DOMContentLoaded", () => {

    $("#color").addEventListener("click", changeColor);
});
