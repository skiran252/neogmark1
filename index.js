const chalk = require('chalk');
var readlineSync = require("readline-sync");
const game = require("./playground");
console.log(chalk.blue("\n\nHi! I am SaiKiran Gongunta\n\n"));
console.log(chalk.green("This is CLI based Quiz Game. please enjoy\n\n"));


const username = readlineSync.question(chalk.blue("PLEASE ENTER YOUR NAME HERE > "));
console.log(chalk.green("\n\n\t\t\tWELCOME "+username+" \n\n"));

console.log("\nTo start this game i need to take few preferences to get quiz of your choice\n");
let topic = readlineSync.question(chalk.yellow("choose a topic from (Linux,Bash,Docker,SQL,CMS,Code,Devops or just press enter: "));
topic = topic.charAt(0).toUpperCase()+topic.slice(1).toLowerCase();
let difficulty = readlineSync.question(chalk.magenta("Choose Difficulty easy medium or hard > "));
difficulty = difficulty.charAt(0).toUpperCase()+difficulty.slice(1).toLowerCase();

const numOfQuestions = parseInt(readlineSync.question("choose number of questions > "));

console.log(chalk.green("\n\nStarting quiz...\n"));

try {
game(username,topic,difficulty,numOfQuestions);
} catch(err) {
  console.log(err);
}