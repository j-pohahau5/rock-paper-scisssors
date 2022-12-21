var choices = ["r", "p", "s"]
var computerChoices = choices[Math.floor(Math.random()*choices.length)]
var wins = 0;
var losses = 0;
var ties = 0;

for (var i = 0; i > 10; i++) {
   
}

function displayPrompt(choices){
  var usersChoice =  prompt("Choose rock, paper, or scissors") 
  confirm("Computers choice " + computerChoices)
  if (usersChoice === "r" && computerChoices === "r"){
    alert("tie")
  } else if (usersChoice === "s" && computerChoices === "s"){
    alert("tie")
  } else if (usersChoice === "p" && computerChoices === "p"){
    alert("tie")
  } else if (usersChoice === "r" && computerChoices === "s"){
    alert("you win")
  } else if (usersChoice === "s" && computerChoices === "p"){
    alert("you win")
  } else if (usersChoice === "p" && computerChoices === "r"){
    alert("you win")
  } else if (usersChoice === "r" && computerChoices === "p"){
    alert("you loss")
  } else if (usersChoice === "s" && computerChoices === "r"){
    alert("you loss")
  } else if (usersChoice === "p" && computerChoices === "s"){
    alert("you loss")
  }
}
displayPrompt()

choices[Math.floor(Math.random()*3)]