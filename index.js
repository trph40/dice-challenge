var randomNumber1 = Math.floor(Math.random()*6+1);
var randomDiceImage1 = "dice"+randomNumber1+".png";
var randomImagewithFolder = "images/"+randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagewithFolder);


var randomNumber2 = Math.floor(Math.random()*6+1);
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImagewithFolder2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagewithFolder2)



if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
}