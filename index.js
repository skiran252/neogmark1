const chalk = require('chalk');
const fs = require('fs');
const stringsimilarity = require('string-similarity-js');
var readlineSync = require("readline-sync");
console.log(chalk.bold.yellow("\n\nHi! this is a quiz on how much do you know me(SAIKIRAN GONUGUNTA)\n\n"));

const username = readlineSync.question("PLEASE ENTER YOUR NAME: ");

let rawdata = fs.readFileSync('questions.json');
let questions = JSON.parse(rawdata).questions;
let score = 0;

questions.forEach((question) => {
  const answer = readlineSync.question(chalk.bold.white("\n"+question.question+ " "));
  if (stringsimilarity.stringSimilarity(answer,question.answer)>0.6) {
    score+=1;
    console.log(chalk.bold.green("\nRIGHT! YOU SCORE 1 POINT\n"));
  } else {
    console.log(chalk.bold.red("\nYOU GOT THIS ONE WRONG\n"));

  }
});

console.log(chalk.magenta("\n\n\t\t\tThank you "+username+" \n\n"));
console.log(chalk.blue("YOU SCORED",score,"/",questions.length,"\n\n"));
