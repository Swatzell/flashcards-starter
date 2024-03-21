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
        round.currentCard = round.deck[round.turns]
        if (evaluateGuess(guess,round.currentCard) === 'incorrect'){
            round.incorrectGuesses.push(round.currentCard.id)
            return 'incorrect'
        } else { return 'correct'}
    }
    function endRound(round) {
        const percentCorrect = calculatePercentCorrect(round);
        return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`}
    
        module.exports = {
        createRound,endRound,takeTurn
    }