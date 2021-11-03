$(document).ready(function() { 

    /* The computerPlay variable will store the current value of what the bot played.  What other data do we need to store in variables? */
    let computerPlay;
    let humanPlay;
    let resultMessage;
    let computerScore = 0;
    let humanScore = 0;

    $('#rock').click(function(){
    
        /* When the human player clicks on the rock button, we update the computerPlay variable with the current value of what the bot played.  We'll do that by calling the getComputerPlay function.  This function, which you can look at below, randomly chooses between: rock, paper, or scissor and returns that value to us.  When the value is returned, it is assigned to the variable. */
        
        computerPlay = getComputerPlay();
        humanPlay = 'rock';

        /* We can update the screen with the value stored in the computerPlay variable with the text method. */
        
        $('#computer-play').text('Computer played '+computerPlay);
        
        /* Use what you learned about if - elseif statements to determine if the human player or the both won the round. Once you've determined the winner, you'll need to update the scoreboard and display the results in the div with the ID of results. */  
        if (computerPlay === 'scissors') {
            resultMessage = 'Human Won!';
            humanScore = humanScore + 1;
            $('#humanScore').text(humanScore);
            // humanScore += 1;
            // humanScore++
            
        } else if (computerPlay === 'paper') {
            resultMessage = 'Computer Won';
            computerScore = computerScore + 1;
            $('#computerScore').text(computerScore);
        } else {
            resultMessage = 'it\'s a tie :(';
        }

        $('#results').text('Result of the game is '+resultMessage);
    });

    $('#paper').click(function() {
        humanPlay = 'paper';
        computerPlay = getComputerPlay();

        $('#computer-play').text('Computer Played '+computerPlay);

        if (computerPlay === 'rock') {
            // Human Won!
            resultMessage = 'Human Won!';
            humanScore = humanScore + 1;
            $('#humanScore').text(humanScore);
        } else if (computerPlay === 'scissors') {
            // Computer Won
            resultMessage = 'Computer Won'
            computerScore = computerScore + 1;
            $('#computerScore').text(computerScore);
        } else {
            // It's a tie
            resultMessage = 'It\s a tie :(';
        }

        $('#results').text('Result of the game is '+resultMessage);
    });

    $('#scissors').click(function() {
        humanPlay = 'scissors';
        computerPlay = getComputerPlay();

        $('#computer-play').text('Computer Played '+computerPlay);

        if (computerPlay === 'paper') {
            // Human Won!
            resultMessage = 'Human Won!';
            humanScore = humanScore + 1;
            $('#humanScore').text(humanScore);
        } else if (computerPlay === 'rock') {
            // Computer Won
            resultMessage = 'Computer Won'
            computerScore = computerScore + 1;
            $('#computerScore').text(computerScore);
        } else {
            // It's a tie
            resultMessage = 'It\s a tie :(';
        }

        $('#results').text('Result of the game is '+resultMessage);
    });

    /* Once you've tested that the rock button works, you can use it as a pattern to make the paper and scissors buttons work. */


    /* FUNCTIONS */

    function getComputerPlay() {
        var plays = ['rock', 'paper', 'scissors'];
        var play = plays[Math.floor(Math.random() * plays.length)];
        return play;
    }



    /*
    You will need to create a function that keeps score for both the user and the bot, based on the result of each round, and update the scores accordingly
    */


});