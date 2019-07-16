const StartGameButton = require("../components/start-game-button");
const Timer = require("../components/timer");

class App {
  render({ started, lost }) {
    if (!started) {
      return new StartGameButton().render();
    }
    if (lost) {
      return "You lost the game!";
    }
    return `
      <div class="timer-wrapper">${new Timer().render()}</div>
    `;
  }
}

module.exports = App;
