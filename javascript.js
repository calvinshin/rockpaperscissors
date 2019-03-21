{/* <script type="text/javascript"> */}

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

// Score needs to be saved outside of the event so that the score is not reset after each game
var userScore = 0
var computerScore = 0

// This function is run whenever the user presses a key.
document.onkeyup = function(keypress) {

  // Determines which key was pressed.
  var userGuess = keypress.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Alerts the key the user pressed (userGuess) IF a value of r, p, or s is selected
  if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
    alert("User guess: " + userGuess);
  
    // Alerts the Computer's guess.
    alert("Computer guess: " + computerGuess);
  
    var outcome = userGuess + computerGuess;

    if (userGuess === computerGuess) {
      alert("You tie!");
      document.getElementById("outcomeElement").innerHTML = (outcome + " | tie");
      console.log(outcome + " | tie | " + userScore + " | " + computerScore);
    }
    else if (outcome === "pr" || outcome === "rs" || outcome === "sp"){
      alert("You win!");
      userScore = userScore + 1;
      document.getElementById("outcomeElement").innerHTML = (outcome + " | win");
      console.log(outcome + " | win | " + userScore + " | " + computerScore);
      document.getElementById("userScoreElement").innerHTML = userScore;
    }
    else if (outcome === "rp" || outcome === "sr" || outcome === "ps"){
      alert("You lose!")
      computerScore = computerScore + 1;
      document.getElementById("outcomeElement").innerHTML = (outcome + " | lose");
      console.log(outcome + " | lose | " + userScore + " | " + computerScore);
      document.getElementById("computerScoreElement").innerHTML = computerScore;
    }
    else {
      alert("Something broke! :(!")
    }
    ;

    // else if {
    //   alert("You lose!")
    // }
  }

};

// </script>