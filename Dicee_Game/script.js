var name1 = prompt("Person 1 enter your name: ");  
var name2 = prompt("Person 2 enter your name: ");

document.getElementById("person1").textContent = name1;
document.getElementById("person2").textContent = name2;


function tossDice() {
    var random1 = Math.random() * 6;
    var random2 = Math.random() * 6;
  
    var num1 = Math.floor(random1) + 1;
    var num2 = Math.floor(random2) + 1;
  
    var head = document.querySelector("h1");
  
    if (num1 > num2) {
      head.innerHTML = name1+ " Wins!";
    } else if (num1 < num2) {
      head.innerHTML = name2+ " Wins!";
    } 
    else {
      head.innerHTML = "It's a TIE";
    }
  
    document
      .querySelector("#img1")
      .setAttribute("src", "./images/dice" + num1 + ".png");
    document
      .querySelector("#img2")
      .setAttribute("src", "./images/dice" + num2 + ".png");
  }
  