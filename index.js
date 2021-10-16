var rs = require("readline-sync");
var chalk = require("chalk");
var questionBank = require("./questionList");
var questionCounter = 0;
var totalQuestion = questionBank.length;

let blue = chalk.blue;
let yellow = chalk.yellow;
let green = chalk.green;
let red = chalk.red;
let cyan = chalk.cyan

var marks = 0


console.log(blue("Welcome to the game!"), yellow("How well do you know about Festivals of India?"));

var name = rs.question(cyan("What is your name? "))
console.log(green(`Hello ${name}!`));

console.log("\n! There will be "+ totalQuestion +" question with 4 option you can select any one i.e", yellow("1, 2, 3, 4"), "!\n");
console.log(green("+5 "), cyan("for right answer,"), red(" -2"), cyan(" for wrong answer!"));

var displayQuestion = (que) => {
  console.log("\n" +  ((questionCounter++) + 1) + ". " + que.question);
  que.options.forEach(displayOptions);
  answer = askAnswer();
  
  if(que.options[answer - 1] == que.answer){
    marks += 5;
    console.log(green("Correct answer!"));
  } else {
    marks -= 2;
    console.log(red("Wrong answer!"));
    console.log(yellow("Correct answer: " + que.answer));
  }
};

var askAnswer = () => {
  var ans = rs.question(cyan("Your answer? "));  
  if(ans >= 1 && ans <= 4){
    return ans;
  } else {
    console.log(red("Invalid choice!!"));
    return askAnswer();
  }  
};

var displayOptions = (option, index) => {  
  console.log("-> " + (index + 1) + ". " + option);
};


//-----------------------------------
questionBank.forEach(displayQuestion);
console.log(cyan("\nYour score: " + marks));
//-----------------------------------
