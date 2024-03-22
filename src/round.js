const { evaluateGuess } = require("./card");
function createRound(deck) {
  var round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  };
  return round;
}

function takeTurn(guess, round) {
  round.turns += 1;
  const feedback = evaluateGuess(guess, round.currentCard);
  if (feedback === "incorrect!") {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.currentCard = round.deck[round.turns];
  return feedback;
}
function calculatePercentCorrect(round) {
  const totalTurns = round.turns;
  const correctTurns = totalTurns - round.incorrectGuesses.length;
  const percentage = (correctTurns / totalTurns) * 100;
  return Math.ceil(percentage);
}

function endRound(round) {
  const percentCorrect = calculatePercentCorrect(round);
  console.log(
    `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`
  );
  return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`}



module.exports = {
  createRound,
  endRound,
  takeTurn,
};
