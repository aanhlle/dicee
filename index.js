
var randomNumberDice1 = Math.floor((Math.random() * 6) +1);

var diceSource1 = "images/dice" + randomNumberDice1 + ".png";

document.querySelector(".img1").setAttribute("src", diceSource1);


var randomNumberDice2 = Math.floor((Math.random() * 6) +1);

var diceSource2 = "images/dice" + randomNumberDice2 + ".png";

document.querySelector(".img2").setAttribute("src", diceSource2);

if (randomNumberDice1 ===randomNumberDice2){
  document.querySelector("h1").textContent = "Dicee again!"
} else if (randomNumberDice1 > randomNumberDice2) {
  document.querySelector("h1").textContent = "😜Player 1 goes first!"
} else {
  document.querySelector("h1").textContent = "Player 2 goes first!😜"
}
