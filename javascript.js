app = {
    userScore : 0,
    computerScore : 0,
    options : ["Rock", "Paper", "Scissors"],
    validRPS : ["r", "p", "s"],
    key : "",
    keyToOption : function(key) {
        if(key === "r"){
            return "Rock"
        }
        else if(key === "s"){
            return "Scissors"
        }
        else if(key === "p"){
            return "Paper"
        }
        else{
            console.log("Error found in logic");
        }
    },
    keyListener : function() {
        document.addEventListener("keyup", function(keypress) {
            // Create a variable for a key
            var key = keypress.key.toLocaleLowerCase()

            // check if it's a valid key and then insert it into the RPS game 
            if(app.validRPS.indexOf(key) > -1) {
                var userOneGuess = app.keyToOption(key);
                app.gameEvent(userOneGuess);
            }
        })
    },
    gameEvent : function(userOneGuess) {
        // Converts and sets the option of userOne
        var userOne = userOneGuess
        // Sets the option of userTwo (or the computer, in this instance)
        var userTwo = this.computerGuess();

        console.log("1: " + userOne + " 2: " + userTwo);

        // determine the winner using integers; 0 is a tie.
        var winner = this.winner(userOne, userTwo);
    },
    // returns a guessed value
    computerGuess : function() {
        var guess = this.options[Math.floor( Math.random() * this.options.length)];
        return guess
    },
    winner : function(playerOne, playerTwo) {
        if(playerOne === playerTwo) {
            return 0
        }
        pOne = this.options.indexOf(playerOne)
        pTwo = this.options.indexOf(playerTwo);

        if(pOne + 1 === pTwo || pOne - 2 === pTwo){
            return 2
        }
        else{
            return 1
        }
    },
    initialize : function() {
        this.keyListener();
    }
}

app.initialize();