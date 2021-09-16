const retrieveQuiz = require("./api.js");
const chalk = require('chalk');
var readlineSync = require("readline-sync");

const playQuiz = async (username,topic, difficulty, numOfQuestions) => {
  let score = 0;
  retrieveQuiz(topic, difficulty, numOfQuestions).then((questions) => {
    if(questions==null){
        console.log("Quiz API limit reached");
        return;
    }
    questions.forEach((mcq) => {
      console.log(chalk.blue("QUESTION: " + mcq.question));
      for (const [key, value] of Object.entries(mcq.answers)) {
        if (value != null)
          console.log(key.replace("answer_", "") + ". ", value);
      }
      let option = readlineSync.question(chalk.blue("ENTER YOUR ANSWER: "));
      option = option.charAt(0).toLowerCase();
      const valid = mcq.correct_answers["answer_" + option+"_correct"];
      if (valid=="true") {
        console.log(chalk.green("RIGHT ANSWER!"));
        score += 1;
        console.log("SCORE: " + score);
      } else {
        console.log(chalk.red("wrong ANSWER!!!"));
        console.log("SCORE: " + score);
      }
    })


  }).then(()=>{
    console.log("YOUR TOTAL SCORE IS: "+score);
    console.log("Thank you "+username+" for playing the quiz");
  });

}

module.exports = playQuiz;
