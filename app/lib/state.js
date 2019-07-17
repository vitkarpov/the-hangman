const PubSub = require("./pubsub");
const wordList = require("./word-list");
const refWord = wordList[getRandomInt(wordList.length - 1)].split("");

/**
 * Global app state
 */
const state = {
  started: false,
  won: false,
  lost: false,
  timer: 0,
  refWord,
  currWord: refWord.map((letter, index) => {
    if (index > 0 && index < refWord.length - 1) {
      return "_";
    }
    return letter;
  }),
  eventBus: new PubSub()
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = state;
