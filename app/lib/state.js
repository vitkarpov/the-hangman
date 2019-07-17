const PubSub = require("./pubsub");
const wordList = require("./word-list");
const refWord = wordList[getRandomInt(wordList.length - 1)].split("");

/**
 * Global app state
 */
const state = {
  started: false,
  won: false,
  timeIsOff: false,
  misses: [],
  timer: 0,
  refWord,
  currWord: getCurrWord(refWord)
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCurrWord(refWord) {
  return refWord.map((letter, index) => {
    if (index > 0 && index < refWord.length - 1) {
      return "_";
    }
    return letter;
  });
}

module.exports = {
  set: (key, prop) => (state[key] = prop),
  get: key => state[key],
  reset: () => {
    state.started = true;

    // let's try another word if they won
    if (state.won) {
      state.refWord = wordList[getRandomInt(wordList.length - 1)].split("");
    }
    state.won = false;
    state.timeIsOff = false;
    state.timer = 0;
    state.currWord = getCurrWord(state.refWord);
    state.misses = [];
  },
  eventBus: new PubSub()
};
