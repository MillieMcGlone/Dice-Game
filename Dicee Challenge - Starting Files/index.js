//player 1 dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice2.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage); //[0] - taps into first image in array when using querySelectorAll

//player 2 dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //dice1.png - dice2.png

var image2 = document.querySelector(".img2").setAttribute("src", randomDiceImage2);

//h1 change depending on winning dice
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = ("Player 1 Wins!");
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = ("Player 2 Wins!");
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = ("draw!");
}
