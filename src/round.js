const {
    evaluateGuess,
    calculatePercentCorrect} = require('./card')
function createRound(deck){
    var round = {
        deck:deck,
        currentCard:deck[0],
        turns:0,
        incorrectGuesses:[]
    
    }
    return round
    }
    function takeTurn(guess, round) {
        round.turns += 1;
        if (evaluateGuess(guess,round.currentCard) === 'incorrect'){
            round.incorrectGuesses.push(round.currentCard.id)
        }
        round.currentCard = round.deck[round.turns]
    }
    function endRound(round) {
        const percentCorrect = calculatePercentCorrect(round);
        return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`}
    
        module.exports = {
        createRound,endRound,takeTurn
    }