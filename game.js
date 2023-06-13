

    var wins = 0, 
        losses = 0, 
        ties = 0

    var choices = ["R", "P", "S"]

    var humanChoice = prompt("Choose R, P, or S")
    console.log(humanChoice)

    var computerChoice = choices[Math.floor(Math.random() * 3)]

    console.log("Human:" + humanChoice)
    console.log("Computer:" + computerChoice)

    if (humanChoice === "S" && computerChoice === "P" ||
        humanChoice === "R" && computerChoice === "S" ||
        humanChoice === "P" && computerChoice === "R"){
        alert("YOU WIN! WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    } else if (humanChoice === computerChoice) {
        alert("You tied. Better than losing, I guess")
    } else {
        alert("You lose. Better luck next time!")
    }

// compare choices
  // if humanChoice is S and computerChoice is P OR
  // if humanChoice is R and computerChoice is S OR
  // if humanChoice is P and computerChoice is R
    // alert that we won
    // increase wins
  // if humanChoice === computerChoice
    // alert that we tied
    // increase ties 
  // else
    // alert that lost
    // increase losses

// ask user "do you want to play again?"
  // if yes
    // restart game
  // if no
    // exit game


