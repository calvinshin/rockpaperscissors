{/* <script type="text/javascript"> */}

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

// Score needs to be saved outside of the event so that the score is not reset after each game
var userScore = 0
var computerScore = 0

function textify(character) {
    if (character === "r") {
        return "rock";
    }
    else if (character === "p") {
        return "paper";
    }
    else if (character === "s") {
        return "scissors";
    }
    else {
        return "NA"
    }
}

// This function is run whenever the user presses a key.
document.onkeyup = function(keypress) {

  // Determines which key was pressed.
  var userGuess = keypress.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//   Attempt at a function to change to make userGuess and computerGuess a text value
    // function textify(userGuess) {
    //     if (userGuess === "r") {
    //         var userGuessCapital = "rock"
    //     }
    // }


  // Alerts the key the user pressed (userGuess) IF a value of r, p, or s is selected
  if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
    alert("You chose: " + textify(userGuess) + "\r\n" + "The computer chose: " + textify(computerGuess));

    console.log(textify(userGuess));

    var outcome = userGuess + computerGuess;

    // alert("You tie! \r\nhaha");
    // use \r\n for when you want a line break in an alert

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
  else {
      console.log("invalid input");
  }

};

// </script>