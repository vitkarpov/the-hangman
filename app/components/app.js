const StartGameButton = require("../components/start-game-button");
const Timer = require("../components/timer");

class App {
  render({ started, lost, timer }) {
    if (!started) {
      return new StartGameButton().render();
    }
    if (lost) {
      return "You lost the game!";
    }
    return `
      <div class="timer-wrapper">${new Timer({ timer }).render()}</div>
      <div class="word"></div>
    `;
  }
}

module.exports = App;
