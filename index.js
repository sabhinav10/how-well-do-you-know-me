var readLineSync=require("readline-sync");
var userName=readLineSync.question("what's your name? ");
console.log("welcome "+userName +" Do you know Abhinav?");
var score=0;
function play(question,answer){
  var userAnswer=readLineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("you are right");
    score=score+1;
  }
  else{
    console.log("you are wrong");
  }
  console.log(score);
}
var questionOne={
  question:"where do i live? ",
  answer:"raipur",
}
var questionTwo={
  question:"my favourite superhero is? ",
  answer:"batman",
}
var questions=[questionOne,questionTwo];
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i].question;
  var currentAnswer=questions[i].answer;
  play(currentQuestion,currentAnswer);
}
