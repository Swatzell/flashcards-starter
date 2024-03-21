function createCard (id,question,answers,correctAnswer) {
var card = {
    id:id,
    question:question,
    answers:answers,
    correctAnswer:correctAnswer,
}
return card
}

function evaluateGuess(guess,card){
    if (guess === card.correctAnswer) {
    return 'correct'
} else {
    return 'incorrect'
}
}


function createDeck(cards){
var deck = cards
return deck
}


function countCards(deck){
return deck.length
}

function takeTurn(guess, round) {
    round.turns += 1;
    if (evaluateGuess(guess,round.currentCard) === 'incorrect'){
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.currentCard = round.deck[round.turns]
}

function calculatePercentCorrect(round) {
    const totalTurns = round.turns;
    const correctTurns = totalTurns - round.incorrectGuesses.length;
    const percentage = (correctTurns / totalTurns) * 100;
    return Math.ceil(percentage);
   }
   
  
 
module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound,
    countCards
}