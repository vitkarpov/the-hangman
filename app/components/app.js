const StartGameButton = require("../components/start-game-button");
const Timer = require("../components/timer");
const Word = require("../components/word");
const Hangman = require("../components/hangman");
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
      return `
        <div class="text-wrapper">
          ${new StartGameButton({ title: "Start the game!" }).render()}
        </div>
      `;
    }
    if (lost) {
      return `
      <div class="text-wrapper">
        You couldn't make it this time, let's ${new StartGameButton({
          title: "try again"
        }).render()} 😉
        <br />
        ${new Hangman({ misses }).render()}
      </div>
      `;
    }
    if (won) {
      return `
      <div class="text-wrapper">
        You did it, congrats! 🎉 Do you want to ${new StartGameButton({
          title: "play again"
        }).render()}?
      </div>
      `;
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
          ${new Hangman({ misses }).render()}
          <div class="misses">Misses: ${misses.join(", ")}</div>
        </div>
      </div>
    `;
  }
}

module.exports = App;
