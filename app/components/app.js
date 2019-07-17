const StartGameButton = require("../components/start-game-button");
const Timer = require("../components/timer");
const Word = require("../components/word");
const state = require("../lib/state");
const guess = require("../lib/guess");

class App {
  constructor() {
    this.onKeyPress = this.onKeyPress.bind(this);

    state.eventBus.on("mount", () => {
      document.addEventListener("keypress", this.onKeyPress);
    });
    state.eventBus.on("ummount", () => {
      document.removeEventListener("keypress", this.onKeyPress);
    });
  }

  onKeyPress(e) {
    if (!state.started) {
      return;
    }
    if ('a' <= e.key && e.key <= 'z') {
      state.currWord = guess(e.key, state.refWord, state.currWord);
      state.eventBus.emit("rerender");
    }
  }

  render({ started, lost, timer, currWord }) {
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
