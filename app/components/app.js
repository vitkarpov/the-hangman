const StartGameButton = require("../components/start-game-button");
const Timer = require("../components/timer");
const Word = require("../components/word");
const state = require("../lib/state");
const guess = require("../lib/guess");
const arrayEq = require("../lib/array-eq");

class App {
  constructor() {
    state.eventBus.on("mount", () => {
      document.addEventListener("keyup", this.onKeyUp);
    });
    state.eventBus.on("ummount", () => {
      document.removeEventListener("keyup", this.onKeyUp);
    });
  }

  onKeyUp(e) {
    if (!state.get("started") || state.get("won") || state.get("lost")) {
      return;
    }
    if ("a" <= e.key && e.key <= "z") {
      const nextWord = guess(
        e.key,
        state.get("refWord"),
        state.get("currWord")
      );

      if (arrayEq(nextWord, state.get("currWord"))) {
        state.get("misses").push(e.key);
        if (state.get("misses").length === 7) {
          state.set("lost", true);
        }
      } else if (arrayEq(nextWord, state.get("refWord"))) {
        state.set("won", true);
      }
      state.set("currWord", nextWord);
      state.eventBus.emit("rerender");
    }
  }

  render({ started, lost, won, misses, timer, currWord }) {
    if (!started) {
      return new StartGameButton({ title: "Start the game!" }).render();
    }
    if (lost) {
      return `You couldn't make it this time, let's ${new StartGameButton({
        title: "try again"
      }).render()} 😉`;
    }
    if (won) {
      return `You did it, congrats! 🎉 Do you want to ${new StartGameButton({
        title: "play again"
      }).render()}?`;
    }
    return `
      <div class="layout">
        <div class="left-col">
          <div class="timer-wrapper">
            ${new Timer({ timer }).render()}
          </div>
          <div class="word">
            ${new Word({ currWord }).render()}
          </div>
        </div>
        <div class="right-col">
          <div class="hangman-sprite"
            style="background-position: 0 ${-256 * misses.length}px;"
          ></div>
          <div class="misses">
            Misses: ${misses.join(", ")}
          </div>
        </div>
      </div>
    `;
  }
}

module.exports = App;
