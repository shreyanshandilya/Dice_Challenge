var randomNumber = Math.random();
randomNumber *= 6;
randomNumber += 1;
randomNumber = Math.floor(randomNumber);
var imageSource = "images\\dice" + randomNumber + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src",imageSource);

var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 += 1;
randomNumber1 = Math.floor(randomNumber1);
var imageSource1 = "images\\dice" + randomNumber1 + ".png";
document.getElementsByClassName("img2")[0].setAttribute("src",imageSource1);

var winner;
if(randomNumber > randomNumber1) {
    winner = "🚩Player 1 Wins";
}
else if(randomNumber < randomNumber1) {
    winner = "Player 2 Wins🚩";
}
else {
    winner = "Draw!";
}
document.querySelector("h1").textContent = winner;