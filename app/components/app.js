const StartGameButton = require("../components/start-game-button");

class App {
  render({ started }) {
    if (!started) {
      return new StartGameButton().render();
    }
    return "game";
  }
}

module.exports = App;
