var choices = ["r", "p", "s"]
var computerChoices = choices[Math.floor(Math.random()*3)]

function displayPrompt(choices){
  var usersChoice =  prompt("Choose rock, paper, or scissors") 
  confirm("Please press ok if you want this choice")
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
  confirm("would you like to play again press ok for yes")

}
displayPrompt()

choices[Math.floor(Math.random()*3)]