module.exports = function(letter, refWord, currWord) {
  const nextWord = currWord.join('').split('');

  for (let i = 0; i < refWord.length; i++) {
    if (nextWord[i] === "_" && refWord[i] === letter) {
      nextWord[i] = letter;
    }
  }
  return nextWord;
};
