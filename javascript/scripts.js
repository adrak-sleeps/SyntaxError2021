var events = require('events');

function AlertMe(){
  alert('This is working');
}
function ClickButton(){
    alert('Question is posted');
}
function ConfirmMe(){
  return window.confirm('Are you sure');
}

function AskQues(){
  var ques = window.prompt("Please type your question here");
  while(ConfirmMe() == false || ques != null){
      ques = window.prompt("Please type your question here");
  }
  console.log(ques);
    
}