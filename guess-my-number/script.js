"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number! 🙌";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

//random number between 1 and 20
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    //when there is no input
    if (!guess) {
        //if button is pressed with nothing in box it will return 0 (falsy)
        document.querySelector(".message").textContent = "No Number :(";

        //when player wins
    } else if (guess === number) {
        //display message and number after correct choice
        document.querySelector(".message").textContent = "Correct Number! 🙌";
        document.querySelector(".number").textContent = number;

        //style after correct choice
        document.querySelector("body").style.backgroundColor = "#60B347";
        document.querySelector(".number").style.width = "30rem";

        //set highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

        //when guess is too high
    } else if (guess > number) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high! 🙈";
            document.querySelector(".score").textContent = --score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = --score;
        }

        //when guess is too low
    } else if (guess < number) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low! 🤷‍♂️";
            document.querySelector(".score").textContent = --score;
        } else {
            document.querySelector(".message").textContent =
                "You lost the game 😭";
            document.querySelector(".score").textContent = --score;
        }
    }
});

//when again button is clicked
document.querySelector(".again").addEventListener("click", function () {
    //reset initial values of score and random number
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score = 20;

    //reset values on page
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    //reset styling of page
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
});
