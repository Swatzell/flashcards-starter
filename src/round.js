function createRound(deck){
    var round = {
        deck:deck,
        currentCard:deck[0],
        turns:0,
        incorrectGuesses:[]
    
    }
    return round
    }

    function endRound(round) {
        const percentCorrect = calculatePercentCorrect(round);
        return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`}
    