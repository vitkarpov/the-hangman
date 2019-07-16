module.exports = function(letter, refWord, currWord) {
  for (let i = 0; i < refWord.length; i++) {
    if (currWord[i] === "_" && refWord[i] === letter) {
      currWord[i] = letter;
    }
  }
  return currWord;
};
