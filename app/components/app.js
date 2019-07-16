const StartGameButton = require("../components/start-game-button");
const Timer = require("../components/timer");
const Word = require("../components/word");

class App {
  render({ started, lost, timer, refWord, currWord }) {
    if (!started) {
      return new StartGameButton().render();
    }
    if (lost) {
      return "You lost the game!";
    }
    return `
      <div class="timer-wrapper">${new Timer({ timer }).render()}</div>
      <div class="word">${new Word({ currWord }).render()}</div>
    `;
  }
}

module.exports = App;
