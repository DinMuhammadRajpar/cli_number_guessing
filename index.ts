#! /usr/bin/env node

import inquirer from "inquirer";

const random_number = Math.floor(Math.random() * 10 + 1);


const guess_number = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 10 ?: ",
    },
]);

if (guess_number.userGuessedNumber == random_number){
    console.log("Hurrah! You guessed number" + " " + random_number + " is correct.");
} else {
    console.log("Your guessed a wrong number. Please try again");
}

console.log(guess_number);

