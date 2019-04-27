app = {
    userOneScore : 0,
    userTwoScore : 0,
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
        // When we add firebase, we essentially would replace this section if firebase is empty.... or sometihng
        var userTwo = this.computerGuess();

        console.log("1: " + userOne + " 2: " + userTwo);

        // determine the winner using integers; 0 is a tie.
        var whoWon = this.winner(userOne, userTwo);
        
        // update the score
        this.scoreUpdate(whoWon);

        // Update the page with new details
        this.pageUpdate();
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
    scoreUpdate : function(whoWon) {
        // Update the score
        if(whoWon === 1) {
            this.userOneScore += 1;
        }
        else if(whoWon === 2) {
            this.userTwoScore += 1;
        }
    },
    pageUpdate : function() {
        // update the display on the page
        document.getElementById("userOneScoreElement").innerHTML = this.userOneScore;
        document.getElementById("userTwoScoreElement").innerHTML = this.userTwoScore;

        // Update the previous game details
    },
    initialize : function() {
        this.keyListener();
    },
    testFirebase : function() {
        this.firebase = firebase.database();

        document.addEventListener("click", function(click) {
            var clickx = click.clientX;
            var clicky = click.clientY;

            app.firebase.ref().set({
                clickx : clickx,
                clicky : clicky
            })
        });
    },
}


app.initialize();
app.testFirebase();