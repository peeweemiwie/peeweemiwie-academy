var user = prompt("Do you choose rock, paper or scissors?");
var computer = Math.random();

if (computer < 0.34) {
  computer = "rock";
} else if(computer <= 0.67) {
  computer = "paper";
} else {
  computer = "scissors";
} 


var compare = function(choice1, choice2){
  if(choice1 === choice2){
    console.log("tie")
  } else if ((choice1 === "paper" && choice2 === "rock") ||(choice2 === "paper" && choice1 === "rock")){
    console.log("paper wins");
  } else if ((choice1 === "scissors" && choice2 === "rock") ||(choice2 === "scissors" && choice1 === "rock")){
    console.log("rock wins");  
  } else if ((choice1 === "scissors" && choice2 === "paper") ||(choice2 === "scissors" && choice1 === "paper")){
    console.log("scissors wins");  
  }
};

compare(user, computer);
