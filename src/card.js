function createCard(id, question, answers, correctAnswer) {
  var card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer,
  };
  return card;
}

function evaluateGuess(guess, card) {
  if (guess === card.correctAnswer) {
    return "correct";
  } else {
    return "incorrect";
  }
}

function createDeck(cards) {
  var deck = cards;
  return deck;
}

function countCards(deck) {
  return deck.length;
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
};
