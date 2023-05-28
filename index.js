var randomNumber1 = Math.floor(Math.random()*6) + 1;

var newDie = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", newDie);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var newDie2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", newDie2);

if(newDie > newDie2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(newDie2 > newDie)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else
{
  document.querySelector("h1").innerHTML = "DRAW!";
}
