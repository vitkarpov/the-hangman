const state = require("../lib/state");

class StartGameButton {
  constructor({ title }) {
    this.title = title;

    state.eventBus.once("mount", () => {
      document
        .querySelector(".start-button")
        .addEventListener("click", this.onButtonClick);
    });
    state.eventBus.once("unmount", () => {
      document
        .querySelector(".start-button")
        .removeEventListener("click", this.onButtonClick);
    });
  }

  onButtonClick() {
    state.started = true;
    state.eventBus.emit("rerender");
  }

  render() {
    return `<button class="start-button">${this.title}</button>`;
  }
}

module.exports = StartGameButton;
