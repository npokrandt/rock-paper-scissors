

var wins = 0, 
    losses = 0, 
    ties = 0

var choices = ["R", "P", "S"]

var playAgain = true

while (playAgain){

    var humanChoice = prompt("Choose R, P, or S")
    console.log(humanChoice)

    var computerChoice = choices[Math.floor(Math.random() * 3)]

    console.log("Human:" + humanChoice)
    console.log("Computer:" + computerChoice)

    if (humanChoice === "S" && computerChoice === "P" ||
        humanChoice === "R" && computerChoice === "S" ||
        humanChoice === "P" && computerChoice === "R"){
        alert("YOU WIN! WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
        wins++
    } else if (humanChoice === computerChoice) {
        alert("You tied. Better than losing, I guess")
        ties++
    } else {
        alert("You lose. Better luck next time!")
        losses++
    }

    alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)

    playAgain = confirm("Play again?")
}

alert("Play again soon!")



